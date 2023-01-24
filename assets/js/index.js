
//Created variables containing the ids of the elements so that we can grab them with JS.
let questionTitle = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let submitButton = document.querySelector("#submit");

// Created an array of objects containing the questions, answers and correct answer.
let questions = [
  {
    question1: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: 1
  },
  {
    question2: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: 3
  },
  {
    question3: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: 2
  },
  {
    question4: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: 2
  },
  {
    question5: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: 1
  },
];

// Added an event listener to the start button so that when it's clicked, the div with the #start-screen is hidden and the div with the id #questions is revealed.
startButton.addEventListener("click", function (event) {
  if (event.target.matches("#start")) {
    document.querySelector("#start-screen").setAttribute("class","hide");
    document.querySelector("#questions").classList.remove("hide");
  }
});

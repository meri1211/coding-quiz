//Created variables containing the ids of the elements so that we can grab them with JS.
let questionTitle = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let submitButton = document.querySelector("#submit");
let choicesOl = document.createElement("ol");
let timeCountEl = document.querySelector("#time");
let currentQuestion;

let secondsLeft;

let answerOptions;

choicesEl.appendChild(choicesOl);

// Created an array of objects containing the questions, answers and correct answer.
let questions = [
  {
    question: "Who created JavaScript?",
    answers: ["Brendan Eich", "Dennis Ritchie", "James Gosling"],
    correctOption: "Brendan Eich",
  },
  {
    question: "second question",
    answers: ["option1", "option2", "option3"],
    correctOption: "option3",
  },
  {
    question: "",
    answers: ["option1", "option2", "option3"],
    correctOption: "option2",
  },
  {
    question: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: "option2",
  },
  {
    question: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: "option1",
  },
];

// Added an event listener to the start button so that when it's clicked, the div with the #start-screen is hidden and the div with the id #questions is revealed.
startButton.addEventListener("click", function (event) {
  if (event.target.matches("#start")) {
    document.querySelector("#start-screen").setAttribute("class", "hide");
    document.querySelector("#questions").classList.remove("hide");
  }
});

//We are setting the text content of the h2 to be the current question.
// We are now looping through the answers, creating the list elements, appending them and setting their text content.

for (let i = 0; i < questions.length; i++) {
  /*currentQuestion = questions[i].question;
    currentQuestion = questionTitle;*/
  questionTitle.textContent = questions[i].question;

  answerOptions = questions[i].answers[i];
  console.log(answerOptions);
  let option1El = document.createElement("li");
  let option2El = document.createElement("li");
  let option3El = document.createElement("li");
  choicesOl.appendChild(option1El);
  choicesOl.appendChild(option2El);
  choicesOl.appendChild(option3El);
}

//First question:
questionTitle.textContent = questions[0].question;
console.log(questions[0].question);

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeCountEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, secondsLeft);
}

//Created variables containing the ids of the elements so that we can grab them with JS.
let questionTitle = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let submitButton = document.querySelector("#submit");
let choicesOl = document.createElement("ol");
let currentQuestion;
let answerOptions;

choicesEl.appendChild(choicesOl);

// Created an array of objects containing the questions, answers and correct answer.
let questions = [
  {
    question: "hello aliens",
    answers: ["option1", "option2", "option3"],
    correctOption: 1,
  },
  {
    question: "second question",
    answers: ["option1", "option2", "option3"],
    correctOption: 3,
  },
  {
    question: "",
    answers: ["option1", "option2", "option3"],
    correctOption: 2,
  },
  {
    question: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: 2,
  },
  {
    question: "",
    answers: ["option1", "option2", "option 3"],
    correctOption: 1,
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

for (let i = 0; i < questions.length; i++) {
  questionTitle.textContent = questions[i].question;
  console.log(questions[i].question);
}

// We are now looping through the answers, creating the list elements, appending them and setting their text content.
for (let i = 0; i < questions.length; i++) {
  answerOptions.textContent = questions[i].answers[i];
  console.log(answerOptions);
  let option1El = document.createElement('li')
  let option2El = document.createElement('li')
  let option3El = document.createElement('li')
  choicesOl.appendChild(option1El)
  choicesOl.appendChild(option2El)
  choicesOl.appendChild(option3El)
}
// First question:
questionTitle.textContent = questions[0].question;
console.log(questions[0].question);

// first question answers

for (let i = 0; i < questions.length; i++) {
  answerOptions = questions[0].answers[i];
  console.log(questions[0].answers[i]);
}

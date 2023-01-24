// timed coding quiz
// multiple choice questions
let choicesEl = document.querySelector("#choices");
let questions = [
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option1},
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option3},
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option2},
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option2},
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option1},
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option3},
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option2},
{question: "", answers: ["option1", "option2", "option 3"], correctOption: option2}
];

let currentQuestion = 0;
let startButton = document.querySelector("#start");
let submitButton = document.querySelector("#submit");

choicesEl.addEventListener("click", function(event) {
if(event.target.matches("button")) {
    console.log(event.target.getAttribute("data-index"));
}
});

// 1 when the start button is pressed, remove the class of hide from questions 


    startButton.addEventListener("click",function(event){
        if (event.target.matches("#start")) {
        document.querySelector("questions").classList.remove("hide");   
        }
    });

    startButton.addEventListener("click",function(event){
        if (event.target.matches("#start")) {
        document.querySelector("wrapper").classList.add("hide");   
        }
    });


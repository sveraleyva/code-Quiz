// global variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionsBox = document.querySelector("#questionsDiv");
// list of all questions, choices, and answers
let questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
let currentQuestionIndex = 0;

// functions
function beginQuiz() {
  questionsBox.classList.remove("hidden");
  createQuestion(currentQuestionIndex);
}

function createQuestion(index) {
  let questionTitle = document.createElement("h2");
  questionTitle.textContent = questions[index].title;
  questionsDiv.append(questionTitle);
  questions[index].choices.forEach((choice) => {
    let choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;
    questionsDiv.append(choiceBtn);
  });
}

// event listeners
// init - when the person comes to the page
// start quiz button
startQuizBtn.addEventListener("click", beginQuiz);
// select an answer buttons?

// this function will call the next question in the array
// input your name and score

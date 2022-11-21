// global variables
let startQuizBtn = document.querySelector("#startQuiz");
let submitBtn = document.querySelector("#submit");
let questionsBox = document.querySelector("#questionsDiv");
let description = document.querySelector("#description");
let quiz = document.querySelector("#quizSection");
let userInput = document.querySelector("#playerInfo");
let scoreboard = document.querySelector("#scoreboard");
let feedback = document.querySelector("#correctOrIncorrect");
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
let numberOfQuestions = questions.length - 1; // -1 to account for the index starting at 0
let currentQuestionIndex = 0;
let userChoice = "";
// variables for timer
let timerEl = document.getElementById("timerEl");
let timeLeft = 60;
let timeInterval; //declared in global, but not assigned yet

// functions
function beginQuiz() {
  questionsBox.classList.remove("hidden");
  startQuizBtn.classList.add("hidden");
  description.classList.add("hidden");
  timerEl.textContent = `${timeLeft} seconds remaining`;
  timeInterval = setInterval(countdown, 1000);
  displayQuestion(currentQuestionIndex);
}

function displayQuestion(index) {
  questionsDiv.innerHTML = "";
  let questionTitle = document.createElement("h2");
  questionTitle.textContent = questions[index].title;
  questionsDiv.append(questionTitle);
  questions[index].choices.forEach((choice) => {
    let choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;
    questionsDiv.append(choiceBtn);
    choiceBtn.addEventListener("click", checkAnswer);
  });
}

function checkAnswer() {
  // Check if answer is correct/incorrect, adds points to score, and shows next question if there's one
  feedback.classList.remove("hidden");
  if (this.textContent != questions[currentQuestionIndex].answer) {
    feedback.textContent = "--- Incorrect ---";
    timeLeft -= 5;
    timerEl.textContent = `${timeLeft} seconds remaining`;
    if (timeLeft <= 0) {
      endQuiz();
    }
  } else {
    feedback.textContent = "--- Correct ---";
  }
  currentQuestionIndex++;

  if (currentQuestionIndex >= numberOfQuestions) {
    endQuiz();
  } else {
    displayQuestion(currentQuestionIndex);
  }
}

function countdown() {
  timeLeft--;
  timerEl.textContent = `${timeLeft} seconds remaining`;
  if (timeLeft === 0) {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timeInterval);
  quiz.classList.add("hidden");
  userInput.classList.remove("hidden");
}

function saveScore() {
  let highScores = JSON.parse(localStorage.getItem("scores")) || [];
  let newScore = {
    name: document.querySelector("input").value,
    score: timeLeft,
  };
  highScores.push(newScore);
  localStorage.setItem("scores", JSON.stringify(highScores));
  userInput.classList.add("hidden");
  displayScoreboard();
}

function displayScoreboard() {
  scoreboard.classList.remove("hidden");
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.forEach((score, index) => {
    let rowEl = document.createElement("tr");
    let initialsEl = document.createElement("td");
    let scoreEl = document.createElement("td");
    initialsEl.textContent = scores[index].name;
    scoreEl.textContent = scores[index].score;
    rowEl.append(initialsEl, scoreEl);
    scoreboard.append(rowEl);
  });
}

// event listeners
// start quiz button
startQuizBtn.addEventListener("click", beginQuiz);
// input your name
submitBtn.addEventListener("click", saveScore);

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
let numberOfQuestions = questions.length - 1; // -1 to account for the index starting at 0
let currentQuestionIndex = 0;
let score = 0;
let userChoice = "";

// functions
function beginQuiz() {
  questionsBox.classList.remove("hidden");
  displayQuestion(currentQuestionIndex);
}

function displayQuestion(index) {
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
  // Check if answer is correct/incorrect, adds points to score, and shows next question
  if (currentQuestionIndex > numberOfQuestions) {
    console.log("game over");
    // add function that ends the game - scoreboard
  } else if (
    this.textContent === questions[currentQuestionIndex].answer &&
    currentQuestionIndex === numberOfQuestions
  ) {
    currentQuestionIndex++;
    score++;
    correctOrIncorrect.textContent = "Correct";
    console.log("game over");
    // add function that ends the game - scoreboard
  } else if (
    this.textContent === questions[currentQuestionIndex].answer &&
    currentQuestionIndex < numberOfQuestions
  ) {
    currentQuestionIndex++;
    score++;
    correctOrIncorrect.textContent = "Correct";
    displayQuestion(currentQuestionIndex);
  } else {
    correctOrIncorrect.textContent = "Incorrect";
  }
}

//clearPrevious function


// event listeners
// init - when the person comes to the page
// start quiz button
startQuizBtn.addEventListener("click", beginQuiz);

// this function will call the next question in the array
// input your name and score

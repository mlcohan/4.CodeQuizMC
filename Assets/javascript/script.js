var timerElement = document.querySelector(".timer-count");
var timeWithText = document.getElementById("timer-text")
// var startButton = document.querySelector(".start-button");
// var quizQuestion = document.querySelector(".question");

//selecting elements on html
var questionContainer = document.getElementById('question-container')
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var storeScoreButton = document.getElementById('score-btn')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')


//defining timer variables 
var timer;
var timerCount;
var quizComplete;

//variable to shuffle questions
var shuffledQuestions 
var currentQuestionIndex

//question bank
 var questions = [
   {
     question: "What does DOM stand for?", 
     answers: [
       { text: "idk", correct: true },
       { text: "idk", correct: false },
       { text: "idk", correct: false },
       { text: "idk", correct: false },
       { text: "ugh", correct: false }
     ]
    },
    {
      question: "What does Any of this mean?", 
      answers: [
        { text: "idk", correct: true },
        { text: "idk", correct: false },
        { text: "idk", correct: false },
        { text: "idk", correct: false },
        { text: "ugh", correct: false }
      ]
     },
     {
      question: "What YA THNINK?", 
      answers: [
        { text: "idk", correct: true },
        { text: "idk", correct: false },
        { text: "idk", correct: false },
        { text: "idk", correct: false },
        { text: "ugh", correct: false }
      ]
     },

     {
      question: "Whats really good?", 
      answers: [
        { text: "idk", correct: true },
        { text: "idk", correct: false },
        { text: "idk", correct: false },
        { text: "ugh", correct: false }
      ]
     },
  ]
  


// Attach event listener to start button to call startGame function on click
storeScoreButton.addEventListener("click", storeScore)
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})


//Start Game Function
function startGame() {

// document.getElementById("start-button").style.visibility = "hidden";
    timerCount = 60;
    startTimer()
    renderQuestions()
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random - .5) //shuffles questions
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    timeWithText.classList.remove('hide')
    setNextQuestion()
  }


//do something with quizComplete

//when the play/next button is clicked
function setNextQuestion (){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//show the next question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)

  })
}

//clears the page of  old Elements
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}



//Selecting the answer function
function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (gameComplete = shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
} else {
  resetState()
  winGame()
}
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
    timerCount --
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

function winGame () {
  questionContainer.textContent = "YOU WIN!! YOU FINISHED WITH " + timerCount + " seconds left!"
  storeScoreButton.classList.remove('hide')
  timeWithText.classList.add('hide');
  storeScore()
}

function storeScore(){
  storeScoreButton.classList.add("hide")
}
// function outtaTime () {

// }



// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
        // Tests if win condition is met
        if (quizComplete && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        outtaTime();
      }
  
  }, 1000);
}

function outtaTime() {
  questionContainer.textContent = "YOU LOSE! TRY AGAIN!"
  timeWithText.classList.add("hide");
  resetState()

}


function renderQuestions() {
    chosenQuestion = questions[Math.floor(Math.random()*questions.length)];

    // quizQuestion.textContent = chosenQuestion

}



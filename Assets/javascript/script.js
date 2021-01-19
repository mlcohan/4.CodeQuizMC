var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizQuestion = document.querySelector(".question");

var chosenQuestion = "";
var timer;
var timerCount;
var quizComplete;

var questions = ["What does DOM stand for?", "What does the i variable represent in a for loop", "What does addEventListener do?"]



function startGame() {

// document.getElementById("start-button").style.visibility = "hidden";
    timerCount = 60;
    startTimer()
    renderQuestions()
    startButton.style.visibility = "hidden"
  }


//do something with quizComplete

function winGame () {
    quizQuestion.textContent = "YOU MADE IT TO THE HALL OF FAME"

    function enterIntials(){

    }
}

function outtaTime () {

}



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
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        outtaTime();
      }
  
  }, 1000);
}

function renderQuestions() {
    chosenQuestion = questions[Math.floor(Math.random()*questions.length)];

    quizQuestion.textContent = chosenQuestion

}


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame)

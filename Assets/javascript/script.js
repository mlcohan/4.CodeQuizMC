var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame)






// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
  
  }, 1000);
}

function startGame() {

    timerCount = 60;
    startTimer()
  }


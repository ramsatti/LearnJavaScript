let num1
let num2
let score = 0
let time = 0
let timerId = null

function randoNum() {
  num1 = getRandomInt(0, 12)
  num2 = getRandomInt(0, 12)
  let printing = document.getElementById("printer")
  printing.innerHTML = num1 + " X " + num2
}

function checkAnswer() {
  let printing = document.getElementById("printer")
  let answer = document.getElementById("ans").value
  let product = num1 * num2
  if (answer == product) {
    ++score
    document.getElementById("score").innerHTML = 'Score: ' + score
    document.getElementById("output").innerHTML = "You are Correct"
    randoNum()
  } else {
    document.getElementById("output").innerHTML = "You are Sadly Incorrect"
    --score
    document.getElementById("score").innerHTML = 'Score: ' + score
  }
  document.getElementById("ans").value = ""
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function startTimer() {
  let timerSelect = document.getElementById("timer")
  let timeStr = timerSelect.options[timerSelect.selectedIndex].value
  if (timeStr === "30sec") {
    time = 30
  } else if (timeStr === "1min") {
    time = 60
  } else if (timeStr === "10mn") {
    time = 600
  }
  timerId = setInterval(updateTimer, 1000)
}

function updateTimer() {
  document.getElementById("timing").innerHTML = "Time Left: " + time + " Seconds"
  time--
  if (time < 0) {
    clearInterval(timerId)
    alert("Time's up! Final score: " + score)
    location.reload()
  }
}

document.getElementById("ans").addEventListener("keydown", function(event) {
  if (event.code === "Space" || event.code === "Enter") {
    checkAnswer()
    document.getElementById("ans").value = ""
  }
})

randoNum()
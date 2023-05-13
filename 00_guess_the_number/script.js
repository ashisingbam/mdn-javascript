const inputGuess = document.querySelector("#input-guess")
const submitBtn = document.querySelector("#submit-btn")

const previousGuesses = document.querySelector(".previous-guesses")
const lastResult = document.querySelector(".last-result")
const lowOrHigh = document.querySelector(".low-or-high")

const resetGameButton = document.createElement("button")


let randomNumber = Math.floor(Math.random() * 100) + 1
let guessCount = 1

function checkGuess() {
  let userGuess = parseInt(inputGuess.value)
  if (inputGuess.value === "") {
    userGuess = 0
  }
  console.log(userGuess)
  if (guessCount === 1) {
    previousGuesses.textContent = `Previous Guesses: `
  }
  console.log(guessCount)
  previousGuesses.textContent += `${userGuess} `

  if (userGuess === randomNumber) {
    lastResult.textContent = `Congratulations! You got it right!`
    lastResult.style.cssText =
      "background-color: green; color: white; padding: 0 0 5px 2px;"
    lowOrHigh.textContent = ``
    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent = `!!!GAME OVER!!!`
    lastResult.style.cssText =
      "background-color: red; color: white; padding: 0 0 5px 2px;"
    lowOrHigh.textContent = ``
    setGameOver()
  } else {
    lastResult.textContent = `Wrong!`
    lastResult.style.cssText =
      "background-color: red; color: white; padding: 0 0 5px 2px;"
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = `Last guess was too low!`
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = `Last guess was too high!`
    }
  }
  guessCount++
  inputGuess.value = ""
  inputGuess.focus()
}

submitBtn.addEventListener("click", checkGuess)

function setGameOver() {
  resetGameButton.textContent = `Start new game`
  inputGuess.disabled = true
  submitBtn.disabled = true
  document.body.append(resetGameButton)
  resetGameButton.addEventListener("click", resetGame)
}
function resetGame() {
  inputGuess.disabled = false
  submitBtn.disabled = false
  resetGameButton.remove()
  const resultParas = document.querySelectorAll(".result-paras p")
  for(result of resultParas) {
    result.textContent = ``
  }
  lastResult.style.backgroundColor = `white`
  guessCount = 1
}

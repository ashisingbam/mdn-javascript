const inputNumber = document.querySelector("#input");
let randomNumber = Math.floor(Math.random() * 100) + 1;
const submitBtn = document.querySelector("#submit-btn");
const previousGuesses = [];
let numberOfTurns = 10;
const prevGuessDiv = document.createElement("div");
const checkAnswerDiv = document.createElement("div");
const lastGuessDiv = document.createElement("div");
const newGameBtn = document.createElement("button");



submitBtn.addEventListener("click", () => {
  if (numberOfTurns > 0) {
    numberOfTurns--;
  }

  console.log(numberOfTurns);

  if (numberOfTurns === 0) {
    console.log('it is zero');
    checkAnswerDiv.textContent = `!!!GAME OVER!!!`;
    checkAnswerDiv.style.cssText =
      "background-color: red; color: white; padding: 0 0 5px 2px; margin: 10px 0;";
    inputNumber.disabled = true;
    submitBtn.disabled = true;
    newGameBtn.textContent = "Start new game";
    document.body.append(newGameBtn);
    lastGuessDiv.remove();
  }


  if (inputNumber.value === "") {
    inputNumber.value = 0;
  }
  previousGuesses.push(inputNumber.value);
  prevGuessDiv.textContent = `Previous guesses: ${previousGuesses.join(" ")}`;
  prevGuessDiv.style.cssText = "margin-top: 10px";
  document.body.append(prevGuessDiv);

  if (parseInt(inputNumber.value) === randomNumber) {
    console.log(`inputNumber.value) === randomNumber`);
    checkAnswerDiv.textContent = `Congratulations! You got it right!`;
    checkAnswerDiv.style.cssText =
      "background-color: green; color: white; padding: 0 0 5px 2px; margin: 10px 0;";
    document.body.append(checkAnswerDiv);
    inputNumber.disabled = true;
    submitBtn.disabled = true;
    newGameBtn.textContent = "Start new game";
    document.body.append(newGameBtn);
    lastGuessDiv.remove();
  } else {
    console.log(`wrong, value !== ranNum`);
    checkAnswerDiv.textContent = `Wrong!`;
    checkAnswerDiv.style.cssText =
      "background-color: red; color: white; padding: 0 0 5px 2px; margin: 10px 0;";
    document.body.append(checkAnswerDiv);
    if (parseInt(inputNumber.value) < randomNumber) {
      console.log(`low guess`);
      lastGuessDiv.textContent = `Last guess was too low!`;
    } else if (parseInt(inputNumber.value) > randomNumber) {
      console.log(`high guess`);
      lastGuessDiv.textContent = `Last guess was too high!`;
    }
    document.body.append(lastGuessDiv);
  }
  inputNumber.value = "";
});

newGameBtn.addEventListener("click", () => {
  prevGuessDiv.remove();
  checkAnswerDiv.remove();
  lastGuessDiv.remove();
  newGameBtn.remove();
  inputNumber.disabled = false;
  submitBtn.disabled = false;
  previousGuesses.length = 0;
  randomNumber = Math.floor(Math.random() * 100) + 1;
});



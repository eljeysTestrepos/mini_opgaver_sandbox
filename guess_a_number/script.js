"use strict";
const ranNum = Math.floor(Math.random() * 100) + 1;
let myGuess = 0;
document.querySelector("#sub_btn").addEventListener("click", guessNumber);

function guessNumber() {
  myGuess++;
  const inputField = document.querySelector("#input_filed").value;

  if (ranNum > inputField) {
    alert(`Nice try! ${inputField} is to low. Try again`);
  } else if (ranNum < inputField) {
    alert(`Nice try! ${inputField} is to high. Try again`);
  } else {
    alert(
      `${inputField} is correct. You used ${myGuess} guess. Feel free to try a new round!`
    );
    location.reload();
  }
}

// function reset() {
//   let newNumber = ranNum;
//   return newNumber;
// inputField.value === ranNum
// }

// myGuess.push(inputField.value);
// if (ranNum === inputField.value) {
//   alert(`${ranNum} er rigtigt!! ${myGuess.length}`);
// } else if (inputField.value < ranNum) {
//   alert(`Øv ${inputField.value} er for lavt. Prøv igen`);
// } else {
//   alert(`${inputField.value} er for højt. Prøv igen.`);
// }

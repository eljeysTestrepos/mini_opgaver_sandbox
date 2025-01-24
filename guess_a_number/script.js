"use strict";
const ranNum = Math.floor(Math.random() * 100) + 1;

let myGuess = 0;
document.querySelector("#sub_btn").addEventListener("click", guessNumber);
console.log(ranNum);
function guessNumber() {
  myGuess++;
  const inputField = document.querySelector("#input_filed").value;

  if (ranNum > inputField) {
    return showAlert();
    // alert(`Nice try! ${inputField} is to low. Try again`);
  } else if (ranNum < inputField) {
    return showAlert();
    // alert(`Nice try! ${inputField} is to high. Try again`);
  } else {
    return showAlert();
    // alert();
    // `${inputField} is correct. You used ${myGuess} guess. Feel free to try a new round!`
    // location.reload();
  }
}

//activate our alert inputs to the user
function showAlert() {
  document.querySelector("#custome_alert").style.display = "flex";
  let article = document.querySelector("article");
  const inputField = document.querySelector("#input_filed").value;
  if (ranNum > inputField) {
    article.innerHTML = `Nice try! ${inputField} Is to low. Try again!`;
  } else if (ranNum < inputField) {
    article.innerHTML = `Nice try! ${inputField} Is to high. Try again!`;
  } else {
    article.innerHTML = `${inputField} Is to correct. You used ${myGuess} guess. <br> Feel free to try a new round!`;
  }
}

function closeAlert() {
  document.querySelector("#custome_alert").style.display = "none";
}
function rest() {
  console.log("New number generate");
  location.reload();
}
// if (ranNum > inputField) {
//   alert(`Nice try! ${inputField} is to low. Try again`);
// } else if (ranNum < inputField) {
//   alert(`Nice try! ${inputField} is to high. Try again`);
// } else {
//   // alert(
//   //   `${inputField} is correct. You used ${myGuess} guess. Feel free to try a new round!`
//   // );
//   // location.reload();
//   return showAlert();
// }
// }

// function showAlert() {
//   document.querySelector("#custome_alert").style.display = "flex";
//   let article = document.querySelector("article").textContent;
//   const inputField = document.querySelector("#input_filed").value;
//   if (ranNum > inputField) {
//     article = document.querySelector(
//       "article"
//     ).textContent = `Nice try! ${inputField} Is to low. Try again!`;
//   } else if (ranNum < inputField) {
//     article = document.querySelector(
//       "article"
//     ).textContent = `Nice try! ${inputField} Is to high. Try again!`;
//   } else {
//     article = document.querySelector(
//       "article"
//     ).textContent = `${inputField} Is to correct. You used ${myGuess} guess. Feel free to try a new round!`;
//     closeAlert();
//   }
// }

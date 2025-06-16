// FUNCTIONS

let attempts = 5;
let resultPoints = 0;
let correctAnswer;

const generateTask = () => {
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const plusOrMinus = Math.trunc(Math.random() * 2);
  const action = plusOrMinus > 0 ? "+" : "-";

  let topNum = firstNum > secondNum ? firstNum : secondNum;
  let bottomNum = firstNum > secondNum ? secondNum : firstNum;

  document.querySelector(".firstNumber").textContent = topNum;
  document.querySelector(".secondNumber").textContent = bottomNum;
  document.querySelector(".action").textContent = action;

  correctAnswer =
    action === "+"
      ? (correctAnswer = topNum + bottomNum)
      : (correctAnswer = topNum - bottomNum);
};

generateTask();
document.querySelector(".remaining").textContent = `Likę bandymai: ${attempts}`;
document.querySelector(".points").textContent = resultPoints;

// Buttons and events

document.querySelector(".confirm").addEventListener("click", function () {
  let answer = Number(document.querySelector(".input").value);

  if (correctAnswer === answer) {
    resultPoints++;
    document.querySelector(".points").textContent = `${resultPoints}`;
    generateTask();
  } else {
    attempts--;
    document.querySelector(
      ".remaining"
    ).textContent = `Likę bandymai: ${attempts}`;

    if (attempts === 0) {
      /* document.querySelector(".message").textContent = "Žaidimas baigtas!"; */
      document.querySelector(".confirm").disabled = true;
      return;
    } else {
      generateTask();
    }
  }

  document.querySelector(".input").value = "";
});

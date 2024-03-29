// Selectors
let generatePinButton = document.querySelector(".generate-btn");
let generatePinInput = document.querySelector(".generatePin");
let showKeyPadValue = document.querySelector(".showValue");
let submitButton = document.querySelector(".submit-btn");
let correctNotification = document.querySelector(".correct-pin");
let wrongNotification = document.querySelector(".wrong-pin");
let tryLeft = document.getElementById("tryLeft");

let chance = 4;
// Removing notify section
let notifySection = document.querySelector(".notify-section");
notifySection.style.display = "none";
// ---

// ---
function removeDefaultNotification() {
  notifySection.style.display = "none";
}
// ---

function generatedPin() {
  let randomNumber = Math.floor(Math.random() * 900000 + 100000);

  generatePinInput.value = randomNumber;
  checkPin();
}

// 17:42 / 1:35:12
generatePinButton.addEventListener("click", generatedPin);

function inputValue(number) {
  showKeyPadValue.value += number;
  // console.log(number);

  if (number == "C") {
    clearPad();
  }
}

// Check pin match
function checkPin() {
  let newPin = generatePinInput.value;
  // console.log(newPin);

  if (newPin === showKeyPadValue.value) {
    showCorrectNotification();
  } else {
    showWrongNotification();
    tryValue();
  }
}

// Show correct Notification
function showCorrectNotification() {
  notifySection.style.display = "block";
  correctNotification.style.display = "block";
  wrongNotification.style.display = "none";
}

// Show Wrong Notification
function showWrongNotification() {
  notifySection.style.display = "block";
  correctNotification.style.display = "none";
  wrongNotification.style.display = "block";
}

// Cleare key pad
function clearPad() {
  showKeyPadValue.value = "";
}

// tryleft function
function tryValue() {
  // let newTryLeft = parseInt(tryLeft);
  // if (newTryLeft > 0) {
  //   newTryLeft = newTryLeft - 1;
  // }
  // console.log(newTryLeft);
  if (chance > 0) {
    chance = chance - 1;
  }
  // console.log(chance);
  tryLeft.innerHTML = chance;

  if (chance == 0) {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "red";
    generatePinButton.disabled = true
    generatePinButton.style.backgroundColor = "red"

  }
}
submitButton.addEventListener("click", checkPin);
removeDefaultNotification();

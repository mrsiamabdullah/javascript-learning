let input_one = document.getElementById("input_one");
let input_two = document.getElementById("input_two");
let result = document.getElementById("result");

function add() {
  let add = parseInt(input_one.value) + parseInt(input_two.value);
  result.innerHTML = add;
  input_one.value = "";
  input_two.value = "";
}

function sub() {
  let sub = parseInt(input_one.value) - parseInt(input_two.value);
  result.innerHTML = sub;
  input_one.value = "";
  input_two.value = "";
}

function multiply() {
  let multiply = parseInt(input_one.value) * parseInt(input_two.value);
  result.innerHTML = multiply;
  input_one.value = "";
  input_two.value = "";
}

function divition() {
  let divition = parseInt(input_one.value) / parseInt(input_two.value);
  result.innerHTML = divition.toFixed(3);
  input_one.value = "";
  input_two.value = "";
}

add();
sub();
multiply();
divition();

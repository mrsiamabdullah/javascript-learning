// console.log("Tasting... 1 2 3");
document.write("<h2> :Use of break and continue </h2>");
document.write("<h2> :Ternary Operator </h2>");
document.write("<h2> :Traditional Function </h2>");
document.write("<h2> :IIFEs and function expression </h2>");

for (var num = 1; num <= 100; num++) {
  if (num == 10) {
    break;
  }
  document.write(" " + num);
}

document.write("<br/> <br/> <br/>");

for (var num = 1; num <= 100; num++) {
  if (num == 10) {
    continue;
  }
  document.write(" " + num);
}

document.write("<br/> <br/> <br/>");

// --- !!! ---

// var number = Number(prompt("Enter a number: "));
// if (number > 0) {
//   document.write("Number is Positive");
// } else {
//   document.write("Number is Negative");
// }

// or

// document.write("<br/>");

// var result = number > 100 ? "Positive" : "Negative";
// document.write("Number is " + result);

// var number = prompt("Enter your first number: ");
// var number2 = prompt("Enter your last number: ");
// var result = number % number2 == 0 ? "Positive" : "Negative";
// document.write("Your number is " + result)

// var number = prompt("Enter a number: ");
// if (number > 0) {
//   console.log("Positive");
// } else if (number <br 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// document.write("<br/>");
// document.write("<br/>");

var num_one = prompt("Enter your 1st number: ");
var num_two = prompt("Enter your 2nd number: ");
var num_three = prompt("Enter your 3rd number: ");

document.write("Your 1st number is " + num_one + "</br>");
document.write("Your 2nd number is " + num_two + "</br>");
document.write("Your 3rd number is " + num_three + "</br>");

var result =
  num_one > num_two && num_one > num_three
    ? num_one
    : num_two > num_one && num_two > num_three
    ? num_two
    : num_three;

document.write("Your biggest number: " + result);

document.write("</br>");
document.write("</br>");

// traditional function

function square() {
  var num = 10;
  var ans = num * num;
  console.log("Result: " + ans);
}

square();
square();
square();

// --- !!! ---

function square_one(number_one_1, number_two_2) {
  var answer = number_one_1 * number_two_2;
  console.log("Result is : " + answer);
}

square_one(5, 6);
square_one(109);
square_one(145);

function display(number_one, number_two) {
  var add = number_one + number_two;
  var sub = number_one - number_two;
  var multi = number_one * number_two;
  var divi = number_one / number_two;
  var reminder = number_one % number_two;
  document.write("Result is: " + add + "</br>");
  document.write("Result is: " + sub + "</br>");
  document.write("Result is: " + multi + "</br>");
  document.write("Result is: " + divi + "</br>");
  document.write("Result is: " + reminder + "</br>");
}

display(5, 7);

// Immediately Invokeable Function Expressions

document.write("</br>");

(function (sum_one, sum_two) {
  var sum = sum_one + sum_two;
  var sub = sum_one - sum_two;
  var multi = sum_one * sum_two;
  var divi = sum_one / sum_two;
  var reminder = sum_one % sum_two;
  document.write("Your Result is: " + sum + "</br>");
  document.write("Your Result is: " + sub + "</br>");
  document.write("Your Result is: " + multi + "</br>");
  document.write("Your Result is: " + divi + "</br>");
  document.write("Your Result is: " + reminder + "</br>");
})(20, 5);

document.write("</br>");

// Function Expression

function displaymsg(msg) {
  document.write(msg);
};
displaymsg("Hello I am message!");

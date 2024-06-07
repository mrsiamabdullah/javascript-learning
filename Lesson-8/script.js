// /* alert("Important!");
// document.write("I love bangladesh"); */
// console.log("Hello World!");

// var name1, name2, name3, testNumber, newName, number1;

// name1 = "Siam Abdullah";
// newName = "Sinan Abdullah";
// name2 = "Nafiz Abdullah";
// name3 = "Jubayer Abdullah";
// (testNumber = "17.5"), (testNumber = parseFloat(testNumber));

// number1 = (17.765649).toFixed(3);

// console.log(newName);
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(typeof testNumber);
// console.log(number1);
// console.log(typeof Number("17"));

// // String Concatination
// var firstName = "Siam";
// var lastName = " Abdullah";
// var fullName = firstName.concat(lastName);

// console.log(fullName);
// console.log("My name is " + firstName + " " + lastName);

// // Library functions for string
// var wordLength = "I love Bangladesh";
// console.log(wordLength.length);

// // var userPrompt = prompt("Enter your text here");
// // var userNumberPrompt = prompt("Enter your text character number");

// // document.write("Your text length is: " + userPrompt.length, "</br>");

// // letterCount = userPrompt.charAt(userNumberPrompt);
// // document.write("Your text character letter: " + letterCount);

// var toUppercase = "Bangladesh";
// toUppercase = toUppercase.toUpperCase();
// console.log(toUppercase);
// console.log(toUppercase.slice(0, 3).toLowerCase());

// // ------
// // var userFirstName = prompt("Enter your first name:");
// // var userLastName = prompt("Enter your last name:");

// // userFullName = userFirstName.concat(" " + userLastName);

// // document.write("User Name: ", userFullName, "</br>");
// // document.write("User Name Total Length: " + userFullName.length, "</br>");
// // document.write(
// //   "User Name in Uppercase: " + userFullName.toUpperCase(),
// //   "</br>"
// // );
// // document.write("User Name 2nd Position Word: " + userFullName.charAt(2));

// // ---
// // Arithmetic and assignment operator

// // +, -, *, /, %, **, ++, --

// // Assignment Operator: +=, -=, /=, *=, %=, **=

// var x = 3;
// x += 6;
// console.log(x);

// var y = 2;
// y *= 10;
// console.log(y);

// var z = 12;
// z /= 6;
// console.log(z);

// var addition1stNumber = prompt("Enter your first digit: ");
// var addition2ndNumber = prompt("Enter your second digit: ");

// addition1stNumber = parseInt(addition1stNumber, 10);
// addition2ndNumber = parseInt(addition2ndNumber, 10);

// total = addition1stNumber + addition2ndNumber;

// document.write("Total: ", total);

// ------

// var user1stNumber, user2ndNumber;
// user1stNumber = prompt("Enter your 1st number:");
// user2ndNumber = prompt("Enter your 2nd number:");

// user1stNumber = parseInt(user1stNumber, 10);
// user2ndNumber = parseInt(user2ndNumber, 10);

// addition = user1stNumber + user2ndNumber;
// substraction = user1stNumber - user2ndNumber;
// multiplication = user1stNumber * user2ndNumber;
// divition = user1stNumber / user2ndNumber;

// document.write(
//   "Addition: ",
//   user1stNumber,
//   " + ",
//   user2ndNumber,
//   " = ",
//   addition,
//   "</br>"
// );
// document.write(
//   "Substraction : ",
//   user1stNumber,
//   " - ",
//   user2ndNumber,
//   " = ",
//   substraction,
//   "</br>"
// );
// document.write(
//   "Multiplication : ",
//   user1stNumber,
//   " × ",
//   user2ndNumber,
//   " = ",
//   multiplication,
//   "</br>"
// );
// document.write(
//   "Divition : ",
//   user1stNumber,
//   " / ",
//   user2ndNumber,
//   " = ",
//   divition,
//   "</br>"
// );

// ------
// var cels = parseFloat(prompt("Enter celsius:"));
// var result = cels * (9 / 5) + 32;
// document.write("Result: ", result);

// var num1 = 25;
// var num2 = 38;
// var num3 = 12;

// console.log(num1 < num2);
// console.log(num1 <= num2);
// console.log(20 == "20");
// console.log(20 != "20");
// console.log(21 !== "20");
// console.log(num1 < num2 && num1 < num2 && num1 > num3);
// console.log(num1 > num2 || num3 > num2);
// console.log(!(22 < 20));
// console.log(!false);

// ------
// var num = prompt("Enter your grade number");

// if (num >= 80 && num <= 100) {
//   document.write("Your Grade is A+");
// } else if (num > 100) {
//   alert("Enter number within 100");
// } else if (num >= 70) {
//   document.write("Your Grade is A");
// } else if (num >= 50) {
//   document.write("Your Grade is A-");
// } else if (num >= 40) {
//   document.write("Your Grade is B");
// } else if (num >= 33) {
//   document.write("Your Grade is C");
// } else {
//   document.write("You failed");
// }

// var letter = prompt("Enter a letter:");

// letter = letter.toLowerCase();

// if (
//   letter == "a" ||
//   letter == "e" ||
//   letter == "i" ||
//   letter == "o" ||
//   letter == "u"
// ) {
//   document.write("Vowel");
// } else {
//   document.write("Consonant");
// }

// var letter = prompt("Enter a letter:");

// letter = letter.toLowerCase();

// switch (letter) {
//   case "a":
//     document.write("Vowel");
//     break;
//   case "e":
//     document.write("Vowel");
//     break;
//   case "i":
//     document.write("Vowel");
//     break;
//   case "o":
//     document.write("Vowel");
//     break;
//   case "u":
//     document.write("Vowel");
//     break;
//   default:
//     document.write("Consonant");
// }

// var numberCount = prompt("Enter any digit:");
// parseInt(numberCount);

// switch (numberCount) {
//   case "1": {
//     document.write("One");
//     break;
//   }
//   default: {
//     document.write("Not a valid number");
//   }
// }

// var numberCount = prompt("Enter any digit:");

// switch (numberCount) {
//   case "1":
//     document.write("One");
//     break;
//   case "2":
//     document.write("Two");
//     break;
//   case "3":
//     document.write("Three");
//     break;
//   case "4":
//     document.write("Four");
//     break;
//   case "5":
//     document.write("Five");
//     break;
//   case "6":
//     document.write("Six");
//     break;
//   case "7":
//     document.write("Seven");
//     break;
//   case "8":
//     document.write("Eight");
//     break;
//   case "9":
//     document.write("Nine");
//     break;
//   case "10":
//     document.write("Ten");
//     break;
//   default:
//     document.write("Not a valid number");
// }

// for (
//   var printValueBangladesh = 1;
//   printValueBangladesh <= 10;
//   printValueBangladesh = printValueBangladesh + 1
// ) {
//   document.write("<h1> Bangladesh </h1>");
// }

// document.write("<h1> END </h1>");

// for (var x = 1; x <= 50; x = x + 1) {
//   document.write("<h1>It's high time to take exercise</>");
// }

// for (var x = 1; x <= 10000; x = x + 1) {
//   document.write(" " + x);
// }

// for (var x = 1; x <= 5; x = x + 1) {
//   var numberOne = parseInt(prompt("Enter your first number: "));
//   var numberTwo = parseInt(prompt("Enter your second number: "));

//   summation = numberOne + numberTwo;

//   console.log("Result: " + summation);
// }

// var e = 0;
// while (e <= 98) {
//   e = e + 2;
//   document.write(" ", e);
// }

// var d = 1;
// var summation = 0;

// while (d <= 100) {
//   d = d++;
//   if (d % 3 == 0 && d % 5 == 0) {
//     summation = summation + d;
//   }
//   console.log(" " + summation);
// }

// var i = 1;
// var sum = 0;

// while (i <= 100) {
//   i = i + 1;
//   if (i % 3 == 0 && i % 5 == 0) {
//     document.write(" ", i);
//     sum = sum + i;
//   }
// }
// document.write(" ,Result: ", sum);

// var i = 1;
// while (i <= 10) {
//   console.log(" ", i);
//   i = i++;
// }

// var i = 1;

// do {
//   document.write(" ", i);
//   i++;
// } while (i <= 100);
// ------
// var e = 1;
// var sum = 0;
// do {
//   if (e % 3 == 0 && e % 5 == 0) {
//     document.write(" ", e);
//     sum = sum + e;
//     e = e + 1;
//   }
// } while (e <= 100);

// var i = 1;
// while (i <= 100) {
//   document.write(" " + i);
//   i = i + 1;
// }

// var i = 1;
// while (i <= 100) {
//   console.log(" ", i);
//   i = i + 1;
// }

// for (var i = 1; i <= 100; i = i + 1) {
//   if (i <= 10) {
//     break;
//   }
//   document.write(" " + i);
// }

// for (var testNumber = 1; testNumber <= 100; testNumber++) {
//   if (testNumber == 90) {
//     break;
//   }
//   document.write(" ", testNumber);
// }

// for (var continueNumber = 1; continueNumber <= 100; continueNumber++) {
//   if (continueNumber == 10) {
//     continue;
//   }
//   document.write(" ", continueNumber);
// }

// var numberCheck = Number(prompt("Enter a Number: "));

// if (numberCheck > 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

// var result = numberCheck > 0 ? "Positive" : "Negative";
// console.log(result);

// var resultCheck = Number(prompt("Enter your result number: "));

// var finalResult = resultCheck >= 33 ? "Passed" : "Failed";
// console.log(finalResult);

// var numberCheckOne = Number(prompt("Enter your 1st number: "));
// var numberCheckTwo = Number(prompt("Enter your 2nd number: "));
// var numberCheckThree = Number(prompt("Enter your 3rd number: "));

// var result = numberCheckOne < numberCheckTwo ? numberCheckTwo : numberCheckTwo < numberCheckOne ? numberCheckOne :

// // Addition Function
// document.write("</br>", "Addition Function", "</br>");
// function addition(num1, num2) {
//   total = num1 + num2;
//   document.write("Result: ", total, " ", "</br>");
// }

// addition(358, 343);
// addition(232, 323);
// addition(21, 21);

// document.write("</br>", "Subtraction Function", "</br>");

// // Subtraction Function
// function subtraction(value1, value2) {
//   result = value1 - value2;
//   document.write("Result: ", result, " ", "</br>");
// }

// subtraction(33, 3);
// subtraction(1000, 500);
// subtraction(243, 342);

// document.write("</br>", "Multiplication Function", "</br>");

// // Multiplication Function
// function multiplication(x, y) {
//   totalValue = x * y;
//   document.write("Result: ", totalValue, " ", "</br>");
// }

// multiplication(32, 22);
// multiplication(344, 345);
// multiplication(78435, 5435);

// // Division Function
// document.write("</br>", "Division Function", "</br>");
// function division(d1, d2) {
//   totaldivision = d1 / d2;
//   document.write("Result: ", totaldivision, " ", "</br>");
// }

// division(10, 5);
// division(23, 32);
// division(100, 3);

// IIFEs
// Summation
// (function sum(a, b) {
//   sumResult = a + b;
//   console.log(sumResult);
// })(73, 2);

// // Function Expression
// var display = function displayMessage(message) {
//   console.log(message);
// };

// display("Hello World!");
// display("Hi this is me");
// display("This is my computer");

// var names = ["Siam", "Nafiz", "Jubayer"];
// console.log(names);
// console.log(names[2]);
// console.log(names[0]);
// names.push("Arnob");
// console.log(names);
// names.push("Samir");
// console.log(names);
// names.pop();
// console.log(names);
// names.pop([3]);
// console.log(names);

// var countrys = new Array(5);

// countrys[0] = "Bangladesh";
// countrys[1] = "India";
// countrys[2] = "Pakistan";
// countrys[3] = "Nepal";
// countrys[4] = "Bhutan";

// console.log(countrys.length);

// var num = new Array();

// for (var i = 0; i < 5; i++) {
//   num[i] = parseInt(prompt("Enter your summetion number: "));
// }

// var sum = 0;

// for (var i = 0; i < 5; i++) {
//   console.log(num[i]);
//   sum = sum + num[i];
// }

// console.log("Total: ", sum);

// console.log(num.length);

// var cars = [];

// cars[0] = "BMW";
// cars[1] = "Tesla";
// cars[2] = "Toyota";

// console.log(cars);

// const names = ["Siam", "Nafis", "Jubayer"];

// console.log(names);
// names.shift();
// console.log(names);
// names.unshift("Abdullah");
// console.log(names);
// names.splice(2, 3, "Siam", "Abdullah");
// console.log(names);
// names.splice(0, 2);
// console.log(names);
// var newArray = names.slice(1, 2);
// console.log(newArray);
// console.log(names);

// names.sort();
// console.log(names);

// names.reverse();
// console.log(names);

// const someNumbers = [20, 24, 12, 24, 33, 94];
// someNumbers.sort(function (a, b) {
//   return a - b;
// });

// console.log(someNumbers);
// ---
// const reverseNumber = [85, 45, 49, 21, 10, 69];
// reverseNumber.sort(function (a, b) {
//   return b - a;
// });

// console.log(reverseNumber);

// const studentNames = [
//   "Siam",
//   "Ashraful",
//   "Sowad",
//   "Rashedul",
//   "Toukir",
//   "Taskin",
//   "Sama",
//   "Emon",
//   "Samir",
//   "Nohan",
// ];
// console.log(studentNames);

// for (var names = 0; names < 10; names++) {
//   console.log(studentNames[names]);
// }

// console.clear();

// Task ---
// • Create a function called highestScore that will
// • Receive a 1d array called scores
// • return the highest score

// function highestScore(scores) {
//   // console.log(scores);
//   let max = scores[0];
//   for (let x = 1; x < scores.length; x++) {
//     if (max < scores[x]) {
//       max = scores[x];
//     }
//   }
//   return max;
// }

// let scores = [45, 46, 87, 23, 65, 34, 24, 765, 435, 345];
// let total = highestScore(scores);
// console.log(total);

// Task ---
// • Create a function called highestRunScorer that will
// • Receive a 2d array called playersInfo
// • Based on highest score, return the name of the player

// function highestRunScorer(playersInfo) {
//   var max = playersInfo[0][0];
//   var maxScore = playersInfo[0][1];

//   for (var x = 1; x < playersInfo.length; x++) {
//     if (maxScore < playersInfo[x][1]) {
//       maxScore = playersInfo[x][1];
//       max = playersInfo[x][0];
//     }
//   }
//   return max;
// }

// var playersInfo = [
//   ["Siam Abdullah", 1770],
//   ["Nafiz Abdullah", 840],
//   ["Jubayer Abdullah", 240],
// ];

// var maxScoreResult = highestRunScorer(playersInfo);
// console.log(maxScoreResult);

// var name = "Siam Abdullah";
// console.log(name.length);

// Task 2 ===

// get first name from user
// get last name from user
// add without using library function
// print full name
// total length of full name
// convert full name into uppercase
// print the 2nd position from full name
// ---
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");

// var fullName = firstName + " " + lastName;

// document.write("Your name is: ", fullName, "</br>");
// document.write("Total length of your name: ", fullName.length, "</br>");
// document.write(
//   "Your name into uppercase: " + fullName.toLocaleUpperCase(),
//   "</br>"
// );
// document.write(
//   "Printing the 2nd position of your full name: " + fullName.charAt(2)
// );
// console.log(`Hello there`);

// var letterGrade = parseInt(prompt("Enter your number: "));

// if (letterGrade > 100 || letterGrade <= 0)
//   document.write("Not a valid number!");
// else if (letterGrade >= 80) document.write("A+");
// else if (letterGrade >= 69) document.write("A");
// else if (letterGrade >= 59) document.write("A-");
// else if (letterGrade >= 49) document.write("B");
// else if (letterGrade >= 39) document.write("C");
// else if (letterGrade >= 33) document.write("D");
// else document.write("Fail");

// var spellNumber = prompt("Enter a digit: ");
// spellNumber = parseInt(spellNumber);

// switch (spellNumber) {
//   case 1:
//     document.write("One");
//     break;
//   case 2:
//     document.write("Two");
//     break;
//   case 3:
//     document.write("Three");
//     break;
//   case 4:
//     document.write("Four");
//     break;
//   case 5:
//     document.write("Five");
//     break;
//   case 6:
//     document.write("Six");
//     break;
//   case 7:
//     document.write("Seven");
//     break;
//   case 8:
//     document.write("Eight");
//     break;
//   case 9:
//     document.write("Nine");
//     break;
//   default:
//     document.write("Not a valid number!");
// }

// var letterChar = prompt("Enter a letter: ");
// letterChar = letterChar.toLowerCase();

// switch (letterChar) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     document.write("Vowel");
//     break;
//   default:
//     document.write("Consonant");
// }

// var addition = 0;

// for (var x = 0; x <= 5; x++) {
//   addition = addition + x;
//   console.log(addition);
// }

// for (var x = 1; x <= 5; x++) {
//   var addition = parseInt(prompt("Enter first Number: "));
//   var addition2 = parseInt(prompt("Enter second Number: "));
//   total = addition + addition2;
//   console.log("Total: ", total);
//   console.log("Bangladesh");
// }

// (function addition(a, b) {
//   var total = a + b;
//   console.log(total);
// })(10, 5);

// (function subtraction(x, y) {
//   var result = x - y;
//   console.log(result);
// })(330, 30);

// (function greet() {
//   var name = "Alice";
//   console.log("Hello, " + name + "!");
// })();
// Output: Hello, Alice!

// function message(message) {
//   // Immediately Invoked Function Expression (IIFE)
//   console.log(message);
// }

// message("Immediately Invoked Function Expression (IIFE)");
// message("Hello World!");
// message("Hello Alice!");

// var printMessage = function message(message) {
//   // Function Expression
//   console.log(message);
// };

// printMessage("Function Expression");
// printMessage("Hello Moto!");

var newArray = [];

for (var i = 0; i < 5; i++) {
  newArray[i] = parseInt(prompt("Enter a number: "));
}

var sum = 0;

for (var i = 0; i < 5; i++) {
  console.log(newArray[i]);
  sum = sum + newArray[i];
}

console.log("Total: ", sum);

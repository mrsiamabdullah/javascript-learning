/* alert("Important!");
document.write("I love bangladesh"); */
console.log("Hello World!");

var name1, name2, name3, testNumber, newName, number1;

name1 = "Siam Abdullah";
newName = "Sinan Abdullah";
name2 = "Nafiz Abdullah";
name3 = "Jubayer Abdullah";
(testNumber = "17.5"), (testNumber = parseFloat(testNumber));
number1 = (17.765649).toFixed(3);

console.log(newName);
console.log(name1);
console.log(name2);
console.log(name3);
console.log(typeof testNumber);
console.log(number1);
console.log(typeof Number("17"));

// String Concatination
var firstName = "Siam";
var lastName = " Abdullah";
var fullName = firstName.concat(lastName);

console.log(fullName);
console.log("My name is " + firstName + " " + lastName);

// Library functions for string
var wordLength = "I love Bangladesh";
console.log(wordLength.length);

// var userPrompt = prompt("Enter your text here");
// var userNumberPrompt = prompt("Enter your text character number");

// document.write("Your text length is: " + userPrompt.length, "</br>");

// letterCount = userPrompt.charAt(userNumberPrompt);
// document.write("Your text character letter: " + letterCount);

var toUppercase = "Bangladesh";
toUppercase = toUppercase.toUpperCase();
console.log(toUppercase);
console.log(toUppercase.slice(0, 3).toLowerCase());

// ------
// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");

// userFullName = userFirstName.concat(" " + userLastName);

// document.write("User Name: ", userFullName, "</br>");
// document.write("User Name Total Length: " + userFullName.length, "</br>");
// document.write(
//   "User Name in Uppercase: " + userFullName.toUpperCase(),
//   "</br>"
// );
// document.write("User Name 2nd Position Word: " + userFullName.charAt(2));

// ---
// Arithmetic and assignment operator

// +, -, *, /, %, **, ++, --

// Assignment Operator: +=, -=, /=, *=, %=, **=

var x = 3;
x += 6;
console.log(x);

var y = 2;
y *= 10;
console.log(y);

var z = 12;
z /= 6;
console.log(z);

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

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

// var newArray = [];

// for (var i = 0; i < 5; i++) {
//   newArray[i] = parseInt(prompt("Enter a number: "));
// }

// var sum = 0;

// for (var i = 0; i < 5; i++) {
//   console.log(newArray[i]);
//   sum = sum + newArray[i];
// }

// console.log("Total: ", sum);

// var number = parseInt(prompt("Enter a number: "));

// if (result > 0) console.log("Positive");
// else console.log("Negative");

// var result = number >= 0 ? "Positive" : "Negative";
// console.log(result);

// number > 0 ? console.log("Positive") : console.log("Negative");

// var letter = prompt("Enter a letter: ");
// letter = letter.toLowerCase();

// if (letter == "a") console.log("Vowel");
// else if (letter == "e") console.log("Vowel");
// else if (letter == "i") console.log("Vowel");
// else if (letter == "o") console.log("Vowel");
// else if (letter == "u") console.log("Vowel");
// else console.log("Consonant");

// letter == "a"
//   ? console.log("Vowel")
//   : letter == "e"
//   ? console.log("Vowel")
//   : letter == "i"
//   ? console.log("Vowel")
//   : letter == "o"
//   ? console.log("Vowel")
//   : letter == "u"
//   ? console.log("Vowel")
//   : console.log("Consonant");

// console.log("Hello World!");
// console.log("This is me writing code!");
// console.log("I just learned a new thing");

// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Function Constructor
// function StudentDetails(name, roll, section, shift, result) {
//   this.name = name;
//   this.roll = roll;
//   this.section = section;
//   this.shift = shift;
//   this.result = result;
// }

// var Student_1 = new StudentDetails("Siam Abdullah", 7664, "C", "Morning", "A-");
// var Student_2 = new StudentDetails("Ashraful Ahmed", 7578, "B", "Morning", "A");
// var Student_3 = new StudentDetails("Sowad Akon", 7642, "C", "Morning", "A+");

// console.log(Student_1);
// console.log(Student_2);
// console.log(Student_3);

// function MyFatherDetails(name, age, height, dateofbirth) {
//   this.name = name;
//   this.age = age;
//   this.height = height;
//   this.dateofbirth = dateofbirth;
// }

// var father = new MyFatherDetails("Md Ruhul Amin", 42, 5.8, "3/02/1985");
// console.log(father);

// console.log(454);

// function Product(ProductName, Price, Availability) {
//   this.ProductName = ProductName;
//   this.Price = Price;
//   this.Availability = Availability;

//   this.callFunction = function () {
//     console.log(this.ProductName);
//     console.log(this.Price);
//     console.log(this.Availability);
//   };
// }

// var watch = new Product("Watch", "43$", "30 Pics Available");
// var car = new Product("Tesla", "92334$", "Out of stock");
// var mobile = new Product("Apple", "893$", "Limited Addition");

// watch.callFunction();
// car.callFunction();
// mobile.callFunction();

// function newArray(name, country, mobile) {
//   this.name = name;
//   this.country = country;
//   this.mobile = mobile;

//   // this.Result = function () {
//   //   console.log(this.name);
//   //   console.log(this.country);
//   //   console.log(this.mobile);
//   // };
// }

// var Siam = new newArray("Siam Abdullah", "Bangladesh", "+982345545");
// var Sowad = new newArray("Sowad Akon", "Uganda", "+935465869");
// var Ash = new newArray("Ashraful Ahmed", "Nigeria", "+843893895");

// Siam.Result();
// Sowad.Result();
// Ash.Result();
// console.log(Sowad);

// const num1 = parseInt(prompt("Enter your first number: "));
// const num2 = parseInt(prompt("Enter your 2nd number: "));

// result = Math.max(num1, num2);
// console.log(result);

// const randomNumber = Math.random();
// randomCode = Math.floor(Math.random() * 999999);
// if (randomCode <= 999999) {
//   randomCode + 10000;
//   console.log(randomCode);
// }

// console.log(randomNumber);

// function CarDetails(CarName, CarModel, CarPrice) {
//   this.CarName = CarName;
//   this.CarModel = CarModel;
//   this.CarPrice = CarPrice;
// }

// var car = new CarDetails("Tesla", "Model-X", "37575$");
// console.log(car);

// var StudentDetails = {
//   Name: "Siam Abdullah",
//   Section: "C",
//   Roll: 237664,
// };

// console.log(StudentDetails);

// let currentDate = new Date();
// document.write("<p>", "Time: ", currentDate.toLocaleTimeString(), "</p>");
// console.log(currentDate);
// let currentYear = currentDate.getFullYear();
// console.log(currentYear);

// let currentMonth = currentDate.getMonth();
// console.log(currentMonth);

// let currentDay = currentDate.getDay();
// console.log(currentDay);

// let currentTime = currentDate.getUTCSeconds();
// console.log(currentTime);

// const d = new Date(2018, 6, 5, 10, 33, 30);
// console.log(d);

// DOM ======

// const documentHtml = document.getElementById("heading");
// documentHtml.innerHTML = "Hello World!";

// const heading = document.getElementsByClassName("heading");
// heading[0].innerText = "Hello";

// document.getElementsByClassName("heading")[0].innerHTML = "Hello World";

// document.getElementById("heading").innerText = "Hi this is me a simple line!";

// document.querySelector(".heading").innerHTML = "Hi this is me Siam Abdullah";

// document.querySelectorAll("ul li")[0].innerHTML = "don't click me";

// document.querySelector(".button-div a").innerHTML = "Click to view the story";

// let message = document.querySelector("#paragraph");

// function clickMessage1() {
//   message.innerHTML = "You have clicked on Button One";
// }

// function clickMessage2() {
//   message.innerHTML = "You have clicked on Button Two";
// }

// let showImage = document.querySelector("#imageshow");

// function clickMessage1() {
//   showImage.src =
//     "https://images.unsplash.com/photo-1718202248477-c5f770d6c8b9?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// }

// function clickMessage2() {
//   showImage.src =
//     "https://images.unsplash.com/photo-1718202248232-0cdbc15d29b2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// }

// let buttonAnchor = document.querySelectorAll("a")[0];
// buttonAnchor.innerHTML = "Click Me";

// buttonAnchor.style.backgroundColor = "Black";
// buttonAnchor.style.color = "#fff";
// buttonAnchor.style.padding = ".6rem 2rem";
// buttonAnchor.style.display = "inline-block0";
// buttonAnchor.style.textDecoration = "none";
// buttonAnchor.href = "https://fonts.google.com/";
// buttonAnchor.target = "_blank";

// let innerDiv = document.getElementById("box-container");
// let list = document.createElement("p");
// let listText_4 = document.createTextNode("This is paragraph 4");
// let listText_5 = document.createTextNode("This is paragraph 5");
// let listText_6 = document.createTextNode("This is paragraph 6");

// innerDiv.appendChild(listText_4);

// var innerDiv = document.getElementById("box-container");
// var paragraph_4 = document.createElement("p");
// var paragraphText = document.createTextNode("This is paragraph 4");

// paragraph_4.appendChild(paragraphText);

// innerDiv.appendChild(paragraph_4);

// let container = document.getElementById("box-container");
// let listItem = document.createElement("li");
// let listItem_5 = document.createElement("li");
// let listItem_6 = document.createElement("li");
// let listContent = document.createTextNode("List 4");
// let listContent_5 = document.createTextNode("List 5");
// let listContent_6 = document.createTextNode("List 6");

// listItem.appendChild(listContent);
// listItem_5.appendChild(listContent_5);
// listItem_6.appendChild(listContent_6);

// container.appendChild(listItem);
// container.appendChild(listItem_5);
// container.appendChild(listItem_6);
// // container.removeChild(listItem);
// // let removeList = document.querySelectorAll("div li")[0];
// // container.removeChild(removeList);
// // container.removeChild(listItem_6);
// // container.removeChild(listItem);
// // container.insertBefore(listItem_6, removeList);

// let container = document.getElementById("box-container");

// let paragraph = document.createElement("p");
// let list = document.createElement("li");
// let listText = document.createTextNode("List 4");
// let paragraphText = document.createTextNode("This is a paragraph!");

// paragraph.appendChild(paragraphText);
// list.appendChild(listText);

// container.appendChild(list);
// container.appendChild(paragraph);

// let photos = [
//   "https://images.unsplash.com/photo-1716652894840-ad2be1cefd1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1677627073216-5425c85c6727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1547084266-7501a964bf9b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// let imageTag = document.querySelector("img");

// count = 0;
// function next() {
//   count++;
//   if (count >= photos.length) {
//     count = 0;
//     imageTag.src = photos[count];
//   } else {
//     imageTag.src = photos[count];
//   }
// }

// function previous() {
//   count--;
//   if (count < 0) {
//     count = photos.length - 1;
//     imageTag.src = photos[count];
//   } else {
//     imageTag.src = photos[count];
//   }
// }

// let addcolor = document.querySelector("#styleColor");

// function addStyle() {
//   addcolor.classList.add("box-color");
// }

// function removeStyle() {
//   addcolor.classList.remove("box-color");
// }

// let addColor = document.querySelector(".styleColor");

// function addStyle() {
//   addColor.classList.add("box-color");
// }

// function removeStyle() {
//   addColor.classList.remove("box-color");
// }

// document.querySelectorAll("button")[0].addEventListener("click", alertClick);

// function alertClick() {
//   alert("Hello World!");
// }

// document.querySelectorAll("button")[0].addEventListener("click", function () {
//   alert("Hi this is a prompt");
// });

// let clickEvent = document.querySelectorAll("button")[0];

// clickEvent.addEventListener("click", function () {
//   alert("Hi! this is a prompt");
// });

// let paragraphDesign = document.querySelectorAll("p")[1];

// paragraphDesign.addEventListener("click", function () {
//   paragraphDesign.classList.add("paragraph");
// });

// let paragraphDesign = document.querySelectorAll("p")[1];
// let Button = document.querySelectorAll("button")[0];

// Button.addEventListener("click", changeColor);

// function changeColor() {
//   paragraphDesign.classList.add("paragraph");
// }

// for (var i = 0; i <= 2; i++) {
//   document
//     .querySelectorAll(".my_button")
//     [i].addEventListener("click", function () {
//       var text = this.innerHTML;
//       document.querySelector("h3").innerHTML = text + " is clicked";
//     });
// }

// document.querySelectorAll("button")[0].addEventListener("click", function () {
//   this.innerHTML = "Hello World";
//   //   alert("Hello");
// });

// for (var i = 0; i <= 2; i++) {
//   var playAudio = document.querySelectorAll("button")[i];
//   playAudio.addEventListener("click", function () {
//     var text = this.innerHTML;
//     // console.log(text);
//     audioFunction(text);
//     playAnimation(text);
//   });
// }

// document.addEventListener("keypress", function (event) {
//   var textList = event.key;
//   audioFunction(textList);
//   playAnimation(textList);
// });

// function audioFunction(text) {
//   if (text === "A") {
//     var audio = new Audio("Audio/clap.wav");
//     audio.play();
//   } else if (text === "B") {
//     var audio = new Audio("Audio/kick.wav");
//     audio.play();
//   } else if (text === "C") {
//     var audio = new Audio("Audio/snare.wav");
//     audio.play();
//   }
// }

// function playAnimation(text) {
//   var selectButton = document.querySelector("." + text);
//   selectButton.classList.add("animation");

//   setTimeout(function () {
//     selectButton.classList.remove("animation");
//   }, 2000);
// }

// let addcolor = document.querySelector(".A");

// function styleAdd() {
//   addcolor.classList.add("animation");
// }

// document.addEventListener("keypress", function (event) {
//   var pressButton = event.key;
//   document.querySelectorAll("p")[1].innerHTML =
//     "You have clicked " + pressButton;
//   playAudio(pressButton);
// });

// var num = 0;
// console.log(Boolean(num));

// function addstyle() {
//   var addStyleParagraph = document.querySelectorAll("p")[1];
//   addStyleParagraph.classList.add("paragraph_style");

//   //   var removeStyle = (document.querySelectorAll("button")[0].innerText =
//   //     "Remove");
// }

// function removestyle() {
//   var removeStyleParagraph = document.querySelectorAll("p")[1];
//   removeStyleParagraph.classList.remove("paragraph_style");
// }

// var heading = document.querySelector("h1");

// heading.addEventListener("click", function () {
//   heading.classList.add("h1style");
// });

// for (var i = 0; i <= 2; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", clickEvent);
//   function clickEvent() {
//     var text = this.innerText;
//     document.querySelector("h1").innerText = text + " is clicked";
//   }
// }

// var fruit = "Jackfruit";
// var car = "BMW";
// var name = "Siam Abdullah";

// // console.log(
// //   `${name} is one of a good student in his class. He love ${car} racing car. His favorite fruit is ${fruit}`
// // );

// console.log(
//   `${fruit} is my favorite fruit. I want to drive ${car} car and my name is ${name}`
// );

// Val	Operator	Description	Example
// 18	( )	Expression Grouping	(100 + 50) * 3
// 17	.	Member Of	person.name
// 17	[]	Member Of	person["name"]
// 17	?.	Optional Chaining ES2020	x ?. y
// 17	()	Function Call	myFunction()
// 17	new	New with Arguments	new Date("June 5,2022")
// 16	new	New without Arguments	new Date()
// Increment Operators
// Postfix increments are executed before prefix increments
// 15	++	Postfix Increment	i++
// 15	--	Postfix Decrement	i--
// 14	++	Prefix Increment	++i
// 14	--	Prefix Decrement	--i
// NOT Operators
// 14	!	Logical NOT	!(x==y)
// 14	~	Bitwise NOT	~x
// Unary Operators
// 14	+	Unary Plus	+x
// 14	-	Unary Minus	-x
// 14	typeof	Data Type	typeof x
// 14	void	Evaluate Void	void(0)
// 14	delete	Property Delete	delete myCar.color
// Arithmetic Operators
// Exponentiations are executed before multiplications
// Multiplications and divisions are executed before additions and subtractions
// 13	**	Exponentiation ES2016	10 ** 2
// 12	*	Multiplication	10 * 5
// 12	/	Division	10 / 5
// 12	%	Division Remainder	10 % 5
// 11	+	Addition	10 + 5
// 11	-	Subtraction	10 - 5
// 11	+	Concatenation	"John" + "Doe"
// Shift Operators
// 10	<<	Shift Left	x << 2
// 10	>>	Shift Right (signed)	x >> 2
// 10	>>>	Shift Right (unsigned)	x >>> 2
// Relational Operators
// 9	in	Property in Object	"PI" in Math
// 9	instanceof	Instance of Object	x instanceof Array
// Comparison Operators
// 9	<	Less than	x < y
// 9	<=	Less than or equal	x <= y
// 9	>	Greater than	x > y
// 9	>=	Greater than or equal	x >= Array
// 8	==	Equal	x == y
// 8	===	Strict equal	x === y
// 8	!=	Unequal	x != y
// 8	!==	Strict unequal	x !== y
// Bitwise Operators
// 7	&	Bitwise AND	x & y
// 6	^	Bitwise XOR	x ^ y
// 5	|	Bitwise OR	x | y
// Logical Operators
// 4	&&	Logical AND	x && y
// 3	||	Logical OR	x || y
// 3	??	Nullish Coalescing ES2020	x ?? y
// Conditional (ternary) Operator
// 2	? :	Condition	? "yes" : "no"
// Assignment Operators
// Assignments are executed after other operations
// 2	=	Simple Assignment	x = y
// 2	:	Colon Assignment	x: 5
// 2	+=	Addition Assignment	x += y
// 2	-=	Subtraction Assignment	x -= y
// 2	*=	Multiplication Assignment	x *= y
// 2	**=	Exponentiation Assignment	x **= y
// 2	/=	Division Assignment	x /= y
// 2	%=	Remainder Assignment	x %= y
// 2	<<=	Left Shift Assignment	x <<= y
// 2	>>=	Right Shift Assignment	x >>= y
// 2	>>>=	Unsigned Right Shift	x >>>= y
// 2	&=	Bitwise AND Assignment	x &= y
// 2	|=	Bitwise OR Assignment	x |= y
// 2	^=	Bitwise XOR Assignment	x ^= y
// 2	&&=	Logical AND Assignment	x &&= y
// 2	||=	Logical OR Assignment	x ||= y
// 2	=>	Arrow	x => y
// 2	yield	Pause / Resume	yield x
// 2	yield*	Delegate	yield* x
// 2	...	Spread	... x
// 1	,	Comma	x , y

// let carModel = 2017;

// {
//   let carModel = 2018;
//   console.log(carModel);
// }

// console.log(carModel);

// const user = "Hello JS";
// user = "new user"; // it will through an error
// console.log(user);

// let car;
// console.log(car); // it will show undefined since there is no value assign to it
// console.log(typeof car); // type will show undefined as well

// // Null
// let age = null; // null means empty or nothing is there
// console.log(age);
// console.log(typeof age); // here we can see that in console it's showing object which is a bug in javascript hasn't been resolved yet.

// My name is Siam Abdullah
// My name is Siam Abdullah

// let num = 30;
// num += num; // it is the same thing as number = number + number
// console.log(num);

// let countryNumber = 24;
// countryNumber++;
// console.log(countryNumber);

// let calculate = 324 + (34 * 3) / 10;
// console.log(calculate);

// calculate = ((24 + 34) * 3) / 10;
// console.log(calculate);

// javascriptCopy code
// let myNum = 123;
// myNum.toExponential(2); // "1.23e+2"
// console.log(myNum);

// javascriptCopy code
// let myNum = 123.456;
// myNum.toFixed(2); // "123.5"
// console.log(myNum);

// var number = number.isNaN("");
// // Number.isNaN(NaN);
// console.log(number);

// let mathNumber = 50;
// let result = Math.sqrt(mathNumber);
// let total = result.toPrecision(4);
// console.log(total);

// --- New Chapter Begins

// let country = "Bangladesh";
// console.log(typeof country);

// Javascript Arithmetic Operators

// 1) +
// 2) -
// 3) *
// 4) /
// 5) %
// 6) **
// 7) ++
// 8) --

// Javascript Assignment Operators

// 1) = , x = y
// 2) += , x = x + y
// 3) -= , x = x - y
// 4) *= , x = x * y
// 5) /= , x = x / y
// 6) %= , x = x % y
// 7) **= , x = x ** y

// Javascript Comparison Operator

// 1) ==
// 2) ===
// 3) !=
// 4) !==
// 5) >
// 6) <
// 7) >=
// 8) <=
// 9) ?

// var carName = "Tesla";
// console.log(carName);

// {
//   var carName = "BMW";
// }

// console.log(carName);

// let carModel = "Tesla Model X";

// {
//   let carModel = "Tesla Model Y";
//   console.log(carModel);
// }

// console.log(carModel);

// const stranger = "Man";
// console.log(stranger);

// {
//   const stranger = "Man";
//   console.log(stranger);

//   const womenStranger = "Female";
//   console.log(womenStranger);
// }

// let year = 2001;
// year = year * year;
// year *= year;
// console.log(year);

// let number = 123;
// let result = number.toString();
// console.log(typeof result);

// let fixedNumbers = 144.444;
// let result = fixedNumbers.toFixed(1);
// console.log(result);

// javascriptCopy code
// let myNum = 123;
// let result = myNum.toExponential(2);

// console.log(result);

// let number = 724.324;
// let total = number.toPrecision(4);
// console.log(total);

// // javascriptCopy code
// let myNum = 123.456;
// let result = myNum.toPrecision(3); // "123.5"
// console.log(result);

// let number = 2024;
// let result = parseInt(2443.243);
// console.log(result);

// a = parseInt("100", 10);
// console.log('parseInt("100",10) = ' + a);

// console.log(a);

// let result = parseFloat("12324");
// console.log(typeof result);

// console.log("Ashraful");
// console.log("Siam Abdullah");

// let demoNumber = 9999999999999999n;
// let demoNumber2 = 9999999999999999n;

// total = demoNumber * demoNumber2;
// BigInt(total);
// console.log(total);

// const mobileModel = {
//   brand: "Redmi",
//   model: "Note 10s",
//   price: "19999",
//   camera: ["24PX", "12PX Ultrawide", "8PX Telephoto"],
//   battery: "3600MAH",
//   protection: "Corning Gorilla Glass",
// };

// console.log(mobileModel.camera[1]);

// var playersInfo = [
//   ["Siam", 18],
//   ["Nafiz", 15],
//   ["Jubayer", 14],
// ];
// console.log(playersInfo);
// console.log(playersInfo[0][0]);
// console.log(playersInfo[2][1]);

// document.write("Name: Siam Abdullah </br>");
// document.write("Phone: 01000000000 </br>");
// document.write("Email: mrsiamabdullah@gmail.com </br>");
// document.write("Address: Dhaka, Bangladesh </br>");
// document.write("Class: XI <br/>");
// document.write("College: Shaheed Ramiz Uddin Cantonment College <br/>");

// JavaScript Number Methods

/*
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
valueOf()   Returns a number as a number
*/

// var num = "20.2";

// // num = toString(num);
// num = parseInt(num);

// console.log(typeof num);

// var number = 18.333;
// console.log(number.toFixed(2));
// console.log(typeof number.toFixed(2));
// console.log(number.toPrecision(3));
// console.log(typeof number.toPrecision(3));

// console.log(typeof Number("   12.6   "));

// let x = 33;
// console.log(typeof Number(x));

// console.log(Number(true));
// console.log(Number(false));

/*
let firstName = "Siam ";
let lastName = "Abdullah";

let fullName = firstName + lastName;

console.log("My name is " + fullName);
console.log("My username is", firstName);
*/

// let userPrompt = prompt("Enter your text: ");
// console.log(userPrompt.length);
// console.log("The length of Siam name is:", userPrompt.length);
// document.write(userPrompt.toUpperCase());
// document.write(userPrompt.toLowerCase());
// console.log(userPrompt.charAt(2));

// userPrompt = userPrompt.slice(0, 2);
// console.log(userPrompt);

// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");

// fullName = firstName + " " + lastName;
// console.log(fullName);
// console.log("Total length of full name:", fullName.length);
// console.log("Converting full name into UPPERCASE:", fullName.toUpperCase());
// console.log("The 2nd position of full name is:", fullName.charAt(2));

// let number1 = prompt("Enter 1st number: ");
// let number2 = prompt("Enter 2nd number: ");

// number1 = parseInt(number1, 10);
// number2 = parseInt(number2, 10);

// addition = number1 + number2;
// substraction = number1 - number2;
// division = number1 / number2;
// multiplication = number1 * number2;

// document.write("Addition: ", number1, " + ", number2, " = ", addition, "</br>");
// document.write(
//   "Substraction: ",
//   number1,
//   " - ",
//   number2,
//   " = ",
//   substraction,
//   "</br>"
// );
// document.write("Division: ", number1, " / ", number2, " = ", division, "</br>");
// document.write(
//   "Multiplication: ",
//   number1,
//   " * ",
//   number2,
//   " = ",
//   multiplication
// );

// let markGrade = prompt("Enter your mark: ");

// markGrade = parseInt(markGrade);

// if (markGrade > 100) console.log("This is not a valid number");
// else if (markGrade >= 90) console.log("A+");
// else if (markGrade >= 70) console.log("A-");
// else console.log("Fail");

// let letter = prompt("Enter your later: ");

// letter = letter.toLowerCase();

// if (
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u"
// ) {
//   console.log("Vowel");
// } else console.log("Consonant");

// let digitSpelling = prompt("Enter a digit: ");

// digitSpelling = Number(digitSpelling);

// switch (digitSpelling) {
//   case 0:
//     console.log("Zero");
//     break;
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   case 4:
//     console.log("Four");
//     break;
//   case 5:
//     console.log("Five");
//     break;
//   case 6:
//     console.log("Six");
//     break;
//   case 7:
//     console.log("Seven");
//     break;
//   case 8:
//     console.log("Eight");
//     break;
//   case 9:
//     console.log("Nine");
//     break;
//   default:
//     console.log("Not a number");
// }

// let letter = prompt("Enter your later: ");
// letter = letter.toLowerCase();

// switch (letter) {
//   case "a":
//     console.log("Vowel");
//     break;
//   case "e":
//     console.log("Vowel");
//     break;
//   case "i":
//     console.log("Vowel");
//     break;
//   case "o":
//     console.log("Vowel");
//     break;
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }

// for (var x = 1; x <= 5; x++) {
//   console.log("Bangladesh");
// }

// addition = 0;

// for (x = 1; x <= 5; x++) {
//   addition = addition + x;
// }

// console.log(addition);

// let x = 2;

// addition = 0;
// while (x <= 100) {
//   addition = addition + x;
//   x = x + 2;
// }

// var x = 2;

// while (x <= 100) {
//   if (x == 2 % 0 || x == 5 % 0) {
//     console.log(x);
//   }
//   x = x + 2;
// }

// text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";

// console.log(text);

// for (variable of iterable) {
//   // code block to be executed
// }

// var let = 1;

// do {
//   document.write(" " + let);
//   let++;
// } while (let <= 10);

// for (setUp = 1; setUp <= 100; setUp++) {
//   if (setUp % 2 == 0 && setUp % 5 == 0) {
//     // break;
//     console.log(true, setUp);
//   } else console.log(false, setUp);
// }

// let PropertyValue = prompt("Enter your grade mark: ");
// PropertyValue = parseInt(PropertyValue);

// let result =
//   PropertyValue > 100
//     ? "Not a valid number!"
//     : PropertyValue >= 90
//     ? "A+"
//     : PropertyValue >= 80
//     ? "A-"
//     : PropertyValue >= 70
//     ? "A"
//     : "Fail";

// console.log(result);

// var let = 1;

// do {
//   document.write(" " + let);
//   let++;
// } while (let < 10);

// function addition(number1, number2) {
//   result = number1 + number2;
//   document.write("Addition = ", result, "</br>");
// }

// function subtraction(number1, number2) {
//   result = number1 - number2;
//   document.write("Subtraction = ", result, "</br>");
// }

// function multiplication(number1, number2) {
//   result = number1 * number2;
//   document.write("Multiplication = ", result, "</br>");
// }

// function division(number1, number2) {
//   result = number1 / number2;
//   document.write("Division = ", result, "</br>");
// }

// addition(243, 28);
// subtraction(23, 34);
// multiplication(34, 345);
// division(324, 3252435);

// Traditional Function

// let number1 = parseInt(prompt("Enter your first number: "));
// let number2 = parseInt(prompt("Enter your second number: "));

// function showDisplay(number1, number2) {
//   let result = number1 + number2;
//   console.log(result);
// }

// showDisplay(number1, number2);

// Immediately Invoked Function Expressions (IIFEs)

// let number1 = parseInt(prompt("Enter your first number: "));
// let number2 = parseInt(prompt("Enter your second number: "));

// (function display(number1, number2) {
//   let result = number1 + number2;
//   console.log(result);
// })(number1, number2);

// Function Expression

// let showMessage = function showMessage(message) {
//   console.log(message);
// };

// showMessage("Hi this is me message");

// let names = Array("Siam", "Nafiz", "Jubayer");

// names[0] = "Siam";
// names[1] = "Nafiz";
// names[2] = "Jubayer";
// names.push("Anas");
// names.pop("Anas");
// names.pop(names[2]);

// console.log(names);
// console.log(names[2]);
// console.log(names.length);
// console.log(names);
// console.log(names);

// var newArray = [34, 32, 243.243, 34, 324];
// total = 0;
// // console.log(newArray);

// for (a = 0; a < 5; a++) {
//   console.log(newArray[a]);
//   total = total + newArray[a];
// }

// console.log(total);

// var names = ["Siam", "Nafiz", "Jubayer"];
// names.shift();
// names.unshift("Anas");
// names.splice(3, 0, "Ashraful", "Sowad", "Hasnat", "Samir");
// names.splice(3, 4);
// var sliceArray = names.slice(0, 3);
// console.log(sliceArray);
// names.sort();
// names.reverse();
// console.log(names);

// for (x = 0; x < 7; x++) {
//   console.log(names[x]);
// }

// function highestScores(array) {
//   var max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// let scores = [10, 14, 12, 12, 15, 21];

// let result = highestScores(scores);
// console.log(result);

// function highestRunScorer(playersInfo) {
//   //   let maximum = [0];
//   //   for (let i = 1; i < playersInfo.length; i++) {}
//   console.log(playersInfo);
// }

// let playersInfo = [
//   ["Siam", 23],
//   ["Nafiz", 45],
//   ["Jubayer", 295],
//   ["Anas", 354],
// ];

// highestRunScorer(playersInfo);

// let studentInfo = {
//   name: "Siam Abdullah",
//   roll: 237664,
//   section: "C",
//   department: "Business",
//   college: "SRCC",
// };

// console.log(studentInfo);

// OBJECT
// function studentInfo(name, roll, section, department, college) {
//   this.name = name;
//   this.roll = roll;
//   this.section = section;
//   this.department = department;
//   this.college = college;

// }

// let student_Siam = new studentInfo(
//   "Siam Abdullah",
//   "7664",
//   "C",
//   "Business",
//   "SRCC"
// );

// let student_Nafiz = new studentInfo(
//   "Nafiz Abdullah",
//   "-",
//   "random",
//   "random",
//   "not in a college"
// );

// let student_Jubayer = new studentInfo(
//   "Jubayer Abdullah",
//   "-",
//   "random",
//   "random",
//   "not in a college"
// );

// console.log(student_Siam);
// console.log(student_Nafiz);
// console.log(student_Jubayer);

// MATH OBJECT
// var randomNumber = 4.8;
// var randomNumber2 = 2.1;

// randomNumber = Math.floor(randomNumber);
// randomNumber2 = Math.ceil(randomNumber2);

// console.log(randomNumber);
// console.log(randomNumber2);

// var numberOFWin = 0;
// var numberOfLost = 0;

// for (x = 1; x <= 5; x++) {
//   var guessNumber = parseInt(prompt("Enter your number from 1 to 5: "));
//   var randomNumber = Math.floor(Math.random() * 5) + 1;

//   if (guessNumber === randomNumber) {
//     console.log("You have won");
//     numberOFWin++;
//   } else console.log("You have lost Random number was " + randomNumber);
//   numberOfLost++;
// }

// document.write("You have won " + numberOFWin + " times", "</br>");
// document.write("You have lost " + numberOfLost + " times");

// var date = new Date();

// var second = date.getSeconds();
// console.log(second);

// var day = date.getDay();
// console.log(day);

// var year = date.getFullYear();
// console.log(year);

// var timeZone = date.getTimezoneOffset();
// console.log(timeZone);

// DOM

// var changeText = document.getElementById("text");
// changeText.innerText = "My name is Siam Abdullah";
// var changeText = document.querySelector(".box a");
// changeText.innerText = "Click";

// var changeText = document.querySelectorAll("div ul li")[1];
// changeText.innerHTML = "Item";

// var paragraph = document.getElementById("paragraph");
// var my_image = document.getElementById("my_image");
// // var showImage = document.getElementById("showImage");
// // var showImage2 = document.getElementById("showImage2");

// function message() {
//   paragraph.innerHTML = "You have clicked on Button 1";

//   //   showImage.style = "block";
//   //   alert("Hi this is a message");
// }

// function message2() {
//   paragraph.innerHTML = "You have clicked on Button 2";
//   //   showImage2.style = "block";
// }

// function message3() {
//   my_image.src =
//     "https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-9/61109021_434579497329038_2374835727474098176_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=U9ay1_IpNT8Q7kNvgHONJto&_nc_ht=scontent.fdac135-1.fna&oh=00_AYDt896-kO50vkJ1I9Ii7PsjJThtj4iLppmCGH_f4Jy4Cw&oe=670BC119";
// }

// function message4() {
//   my_image.style.display = "none";
// }

// var selectDIV = document.getElementById("my-div");
// var link = document.getElementById("link");
// var listItem = document.getElementById("list");

// var anchorTAG = document.createElement("a");
// var textDemo = document.createTextNode("About");
// anchorTAG.href = "#";

// anchorTAG.appendChild(textDemo);
// selectDIV.insertBefore(anchorTAG, listItem);
// link.style.textDecoration = "none";
// anchorTAG.style.textDecoration = "none";
// listItem.classList.add("listITEM");

let paragraph = document.getElementById("paragraph");

function addStyle() {
  paragraph.classList.add("paragraph");
}

function removeStyle() {
  paragraph.classList.remove("paragraph");
  paragraph.style.transition = "all .3s";
  paragraph.style.display = "inline-block";
}

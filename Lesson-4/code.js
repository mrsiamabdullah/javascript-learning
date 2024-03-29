document.write("<h2> : Programs Using Logical Operators </h2>");
document.write("<h2> : Switch </h2>");
document.write("<h2> : Use of loop </h2>");

// !!! --- !!!

// var letter = prompt("Enter your letter: ");

// letter = letter.toLowerCase();
// if (
//   letter == "a" ||
//   letter == "e" ||
//   letter == "i" ||
//   letter == "o" ||
//   letter == "u"
// )
//   document.write("Your letter is Vowel");
// else document.write("Your letter is Consonant");

// !!! --- !!!

// var digit = prompt("Enter any digit: ");

// if (digit == 0) document.write("Zero");
// else if (digit == 1) document.write("One");
// else if (digit == 2) document.write("Two");
// else if (digit == 4) document.write("Four");
// else if (digit == 5) document.write("Five");
// else if (digit == 6) document.write("Six");
// else if (digit == 7) document.write("Seven");
// else if (digit == 8) document.write("Eight");
// else if (digit == 9) document.write("Nine");
// else document.write("Not a valid digit");

// --- or

// switch, case, break, default

// var digit = prompt("Enter any digit: ");

// switch (digit) {
//   case "0":
//     document.write("Zero");
//     break;

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
//     document.wri("Nine");
//     break;

//   default:
//     document.write("Not a digit");
// }

// Task 5 - input a letter and check it is vowel or consonent using switch

// var letter = prompt("Enter your letter: ");

// letter = letter.toLowerCase();

// switch (letter) {
//   case "a":
//     document.write("Your letter is vowel");
//     break;

//   case "e":
//     document.write("Your letter is vowel");
//     break;

//   case "i":
//     document.write("Your letter is vowel");
//     break;

//   case "o":
//     document.write("Your letter is vowel");
//     break;

//   case "u":
//     document.write("Your letter is vowel");
//     break;

//   default:
//     document.write("Your letter is consonent");
// }

// var letter = prompt("Enter your letter: ");

// letter = letter.toLowerCase();
// switch (letter) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     document.write("Your letter is vowel");
//     break;

//   default:
//     document.write("<h3> Your letter is consonent </h3> </br>");
// }

// // Use of loop

// for (var num = 2; num <= 101; num = num + 2) {
//   document.write(" " + num);
// }

// Task - 6 ---

// Write a program that will print sum of all the numbers that are divisible by 3 and 5 from 1-100

// var i = 1;
// var sum = 0;

// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) sum = sum + i;
//   i = i + 1;
// }

// document.write(sum)

var num = 1;

do {
  document.write(" " + num);
  num++;
} while (num <= 20);

// document.write(num)

// Objects
let car = {
  name: "BMW",
  model: "2022",
  price: "#60k",
};

console.log(car);
console.log("Car Name =", car.name);
console.log("Car Model =", car.model);
console.log("Car Price =", car.price);

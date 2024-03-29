// alert(404);
console.log("Hello World");

// This is my first comment

// document.write("<h1> This is my first time learning javascript </h1>");
// document.write("<h3> My 1st comment </h3>");
// document.write("<h3> My 2nd comment </h3>");
// document.write("<h3> My 3rd comment </h3>");

// // Data Types:

// // String or character or char: "We are learning javascript" --- always use quotation for string
// // Number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
// // Boolean: true, false

// console.log("We are learning javascript");
// console.log(typeof 1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
// console.log(404);
// console.log(typeof false);
// console.log(true);

// // Javascript Variables:

// // --- Variable names can only contain letters, numbers, underscores, or dollar-$ signs. examples: A-Z, a-z, 0-9, $, _ better to use CamelCase - MyName, IsOutsideRaning

// // --- Variable names must begin with a letter, an underscore (_) or a dollar sign ($)

// // --- Variable names cannot contain spaces

// // --- Reserved words (like Javascript keywords) cannot be used as names

// // --- Variable names are case-sensitive

// // var name1, carName, priceRange;

// // name1 = "Price:   ";
// // carName = "BMW   ";
// // priceRange = "20 Taka";

// // document.write(name1);
// // document.write(carName);
// // document.write(priceRange);

// // var num1 = "Hello";
// // var num2 = "World";

// // console.log(num1);
// // console.log(num2);

// // var price_1 = "Product price = 20 taka, "
// // let price_2 = "Product price = 50 taka"
// // const total_price = price_1 + price_2
// // console.log(total_price);

// let carName = "BMW",
//   person = "Siam",
//   age = 17;
// // carName = "BMW"
// // person = "Siam"
// // age = 17

// console.log(carName, person + " " + age);

// let x = 2 + 3 + "h";
// console.log(x);

// let a = 3;

// {
//   let a = 4;
//   console.log(a);
// }

// {
//   let a = 5;
//   console.log(a);
// }

// // console.log(a);

// // carName = "Saab";
// // let carName = "Volvo";

// // console.log(carName);

// let j = 5;
// j = 35;
// console.log(j);

// const n = "Nafiz";
// n = "Nafiz Abdullah"; reassign
// console.log(n);

// var x = 4;
// x *= 4; // <-- Meaning x = x * 4
// // Ans: == 16

// x /= 3; // <-- Meaning x = x / 3
// // Ans: /*

// console.log(x);

// let a = 6;
// let b = 3;

// console.log(a ** b);

let num1 = prompt("Enter your first number: ");
let num2 = prompt("Enter your second number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

addition = num1 + num2;
substraction = num1 - num2;
multiplication = num1 * num2;
divition = num1 / num2;

document.write(num1 + " + ", num2, " = ", addition, "</br> </br>");
document.write(num1 - " - ", num2, " = ", substraction, "</br> </br>");
document.write(num1 * " * ", num2, " = ", multiplication, "</br> </br>");
document.write(num1 / " / ", num2, " = ", divition, "</br> </br>");

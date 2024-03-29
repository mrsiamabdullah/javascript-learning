document.write("<h2> : Relational and Logical Operator </h2>");
document.write("<h2> : if, else if, else </h2>");
document.write("<h2> : Letter Grade Program </h2> </br> </br> </br>");
// console.log("Testing...");

// var base = prompt("Enter your Base: " )
// var height = prompt("Enter your height: ")

// square = (base * height) / 2

// document.write("Your Shape: " + square);

// ---------- 404 !!!

// var fahrenheit = prompt("Enter your Fahrenheit value: ");

// temperature = ((fahrenheit - 32) * 5) / 9;

// document.write("Celsius: " + temperature.toPrecision(6));

// ---------- 404 !!!

// Relational Operator =   ->, >, >=, <, <=, ==, ===, !=, !==

// Logical Operator = &&, ||, !

// var nmu1 = 20;
// var num2 = 25;

// console.log(nmu1 > num2);
// console.log(nmu1 < num2);

// console.log(nmu1 >= num2);

var nmu1 = 20;
var nmu2 = 25;
var nmu3 = 30;

console.log(nmu1 > nmu2);

console.log(nmu1 < nmu2);

console.log(nmu1 <= nmu2);

console.log(nmu1 >= nmu2);

console.log(nmu1 == "20");

console.log(nmu1 === nmu2);

console.log(nmu2 > nmu1 && nmu1 < nmu3);

console.log(nmu2 < nmu1 || nmu1 > nmu2 || nmu2 < nmu1);

console.log(!(nmu1 > nmu2));

console.log(!true);

console.log(!false);

// if, else if, else  ---

var num = 5;

if (num % 2 == 0) console.log("Even");
else console.log("Odd");

// ইতিহাসে আর কোন বছর এত দেশে নির্বাচন অনুষ্ঠিত হয়নি | Election Year 2024 | Jamuna TV

// Letter Grade

var marks = prompt("Enter your marks: ");

if (marks >= 80) document.write("<h3> Your Result is: A+ </h3>");
else if (marks >= 70) document.write("<h3> Your Result is: A </h3>");
else if (marks >= 60) document.write("<h3> Your Result is: A- </h3>");
else if (marks >= 50) document.write("<h3> Your Result is: B </h3>");
else if (marks >= 40) document.write("<h3> Your Result is: C </h3>");
else if (marks >= 33) document.write("<h3> Your Result is: D </h3>");
else document.write("Your Result is: Fail");

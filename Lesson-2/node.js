document.write("<h2> 1:Number Method </h2>");
document.write("<h2> 2:String Concatenation </h2>");
document.write("<h2> 3:String Library Functions </h2>");
document.write("<h2> 4:Arithmetic and Operator </h2>");
document.write("<h2> 5:Calculator </h2> </br> </br> </br>");

// // Number Method ---

// console.log(typeof 20);
// console.log(typeof "20");

var num = 20;
num = toString(num);
console.log(typeof num);

var num2 = "21";
num2 = parseInt(num2);
console.log(typeof num2);

var num3 = "22.2";
num3 = parseFloat(num3);
console.log(typeof num3);

// num = 17.4567;
// console.log(num.toFixed(2));

// num = 22.4875;
// console.log(num.toPrecision(5));

// console.log(typeof Number("12.5")); //ctrl + \

// // String Concatenation --- !!!!!!!!!!!!!!!

// var nameIs = "My name is ";
// var firstName = " Siam";
// var lastName = " Abdullah. ";

// document.write("My name is" + firstName + lastName);
// // document.write(nameIs + firstName + lastName);
// // console.log(nameIs + firstName + lastName);
// // console.log(nameIs, firstName, lastName);

// // String Library Functions --- !!!!!!!!!!!!!!!!!

// var text_One = " (I love to code! ";
// var text_Two = " This is my cool headline!) ";

// var textLength_One = text_One.length;
// var textLength_Two = text_Two.length;

// console.log(textLength_One, textLength_Two);
// document.write(text_One, text_Two);
// document.write("- Total character: ", textLength_One, ", ", textLength_Two);

// document.write("Total character: " + textLength_One);

// // console.log(textLength_One);

// // document.write(text_One, " ", text_Two);

// // var textPrompt = prompt("Enter your name:")
// // document.write(textPrompt)

// // var prompt_One = prompt("Hello! Enter your name:");
// // // alert("404 error")
// var total_char = prompt_One.length
// document.write(" ", prompt_One.length);

// var charCount = "Hello its my good day!";
// document.write(" ", charCount.charAt(10));

// var bd = " Bangladesh ";
// bd = bd.toUpperCase();
// document.write(bd);

// var rock = "Lats rock and roll!";
// rock = rock.toLowerCase();
// document.write(rock);

// var text_one = " is my country "
// var text_two = " Bangladesh "
// document.write(text_two + text_one) // meathod one

// var test_one = " Hello "
// var test_two = " World "
// document.write(test_one.concat(test_two)) // meathod two

// // slice
// var heading = "Bangladesh"
// document.write(heading.slice(2, 5))

//  --- Task 2 ---

// getting firstname and lastname from user
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// // adding firstname and lastname
// var fullName = firstName + lastName;

// // printing the length of full name
// document.write("Fullname is: " + fullName + "</br>");

// // Printing the fullname length
// document.write("Lenght of full name: " + fullName.length + "</br>");

// // Printing the fullName to Uppercase
// document.write("Uppercase full name: " + fullName.toUpperCase() + "</br> </br> </br>");

// Arithmetic Operator -> +, -, *, /, % (Modulus or Reminder), **(Exponent) ++, --

// Assignment Operator -> =, +=, -=, *=, /=, %=, **=

var x = 8;
x += 4; // x= x+4
console.log(x);

var y = 4;
y -= 2; // y = y-2
console.log(y);

var z = 5;
z *= 3;
console.log(z);

var q = 10;
q /= 2;
console.log(q);

// var p = 50

// document.write("<h3> Making my own calculator </h3>");

// var num1 = prompt("Enter your first number: ");
// var num2 = prompt("Enter your last number: ");

// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);

// Addition = num1 + num2;
// document.write("Addition: " + Addition + "</br>");

// Substraction = num1 - num2;
// document.write("Substraction: " + Substraction);

//    --- Task 3 ---

document.write("<h3> Making my own calculator: </h3>");

var num1 = prompt("Enter your first number: ");
var num2 = prompt("Enter your last number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

addition = num1 + num2;
document.write("Addition: " + addition + "</br>");

substraction = num1 - num2;
document.write("Substraction: " + substraction + "</br>");

multiplication = num1 * num2;
document.write("Multiplication: " + multiplication + "</br>");

division = num1 / num2;
document.write("Division: " + division + "</br>");

modulus = num1 % num2;
document.write("Modulus: " + modulus + "</br>");

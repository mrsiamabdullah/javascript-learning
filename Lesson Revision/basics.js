console.log("testing...");

// Javascript Conditions, Variables

var personName = "Siam Abdullah";
{
  var personName = "Nafiz Abdullah";
  console.log(personName);
}

console.log(personName);

// personAge = 17
// let personAge = 18
// console.log(personAge);

let personAge = 17;

{
  let personAge = 18;
  console.log(personAge);
}

console.log(personAge);

// personNum = 0o0
// var personNum = 123
// console.log(personNum);

// ---

// const = constant
const brandName = "BMW";
const carName = "Tesla";
console.log(brandName);
console.log(carName);

// if, else, else if

let password = "python";

if (password === "python") {
  console.log("Login Succesful!");
} else {
  console.log("Password is incorrect!");
}

let isCorrect = "HelloUser";

if (isCorrect === "HelloUser") {
  console.log("User can access the dashboard!");
} else {
  console.log("User can not enter  the dashboard!");
}

// // Function to find the maximum between two numbers
// function findMax(num1, num2) {
//   // Check if the first number is greater than the second
//   if (num1 > num2) {
//     // If it is, return the first number
//     return num1;
//   } else {
//     // If it is not, return the second number
//     return num2;
//   }
// }

// let num1 = parseFloat(prompt("Enter your first number: "));
// let num2 = parseFloat(prompt("Enter your second number: "));

// let max = findMax(num1, num2);
// console.log(`The maximum between ${num1} and ${num2} is ${max}`);

let isDarkmode = "isOn";

if (isDarkmode) {
  console.log("Dark mode is ON");
} else {
  console.log("Dark mode is OFF");
}

// Falsy Values in JavaScript

// null
// undefined
// false
// NaN
// 0
// -0
// 0n
// ""

// OR = ||
// And = &&

// let math = prompt("Enter your math exam total number: ");
// let english = prompt("Enter your english exam total number: ");
// let science = prompt("Enter your science exam total number: ");

// let total = (math + english + science) / 3;
// console.log("Your average number is: ", total);

// // Function to check whether a number is negative, positive or zero
// function checkNumber(number) {
//   // Check if the number is negative
//   if (number < 0) {
//     console.log("The number is negative.");
//   }
//   // Check if the number is positive
//   else if (number > 0) {
//     console.log("The number is positive.");
//   }
//   // Otherwise, the number is zero
//   else {
//     console.log("The number is zero.");
//   }
// }

// // Get the number from the user
// let number = parseInt(prompt("Enter a number: "));

// // Call the function to check the number
// checkNumber(number);

let num1 = 65;
let num2 = 37.183454;

total = num1 + num2;

console.log("Result with decimal:", total.toFixed(3));

console.log("Round Number:", Math.round(total));

console.log("Ceil Number: ", Math.ceil(total));

console.log("Floor Number: ", Math.floor(total));

newValue = -44;
console.log("Absolute Number: ", newValue);
console.log("Absolute Number: ", Math.abs(newValue));

newNumber = "734.47";

console.log(parseInt(newNumber));
console.log(parseFloat(newNumber));

// Dice Rolling
randomNumber = Math.random() * 7;
console.log("Random Number: ", Math.floor(randomNumber));

// Generate OTP code
otp = Math.random() * 900000 + 100000;
console.log("Generate 4 digit OTP: ", parseInt(otp));

// Function

function totalNumber() {
  let addition = 1;
  let sub = 3;
  console.log(addition + sub);
}

totalNumber();
// ---
function keyboard(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

keyboard(10, 10, 10);

// ---

function result(num1, num2) {
  console.log("Addition: ", num1 + num2);
  console.log("Substraction: ", num1 - num2);
  console.log("Multiplication: ", num1 * num2);
  console.log("Divition: ", num1 / num2);
}

result(20, 10);

let newSentence = "Bangladesh is a highly populated country";
let greetings = "Good Morning ";
let newUser = "Siam Abdullah";
let first_Word = "Hello! ";
let country = "Bangladesh";
let blogPost =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto placeat debitis reprehenderit. Eius quis dolore iusto laudantium, harum molestias numquam rerum atque explicabo ex exercitationem eum minima neque voluptates!";
let love = "Hello! I love you Saferah Safa";
let newName = "      Hello! My Name is Siam   ...   ...   ...";

console.log(newUser.length);
console.log(greetings.concat(newUser));
console.log(first_Word.concat(country));
console.log(newUser.substring(5, 13));
console.log(newSentence.slice(0, 20));
console.log(blogPost.slice(0, 50), "...");
console.log(love.indexOf("love"));
console.log(love.charAt(26));
console.log(love.length);
console.log(love.includes("Saferah Safa"));
console.log(love.toUpperCase());
console.log(love.toLowerCase());
console.log(newName.trim());

let myParagraph =
  "Hello! My name is Siam Abdullah. I love to watch movies. I love to play football and recently I fell in love with someone";

let searchWords = "Love";

if (myParagraph.toLowerCase().includes(searchWords.toLowerCase())) {
  console.log(searchWords, "word is present in the sentence");
} else {
  console.log(searchWords, "word is absent in the sentence");
}

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3school");
console.log(newText);

// Loop

// for (let forloop = 1; forloop < 10; forloop++){
//   console.log(forloop);
// }

for (let forloop = 1; forloop <= 10; forloop++) {
  if (forloop % 2 === 0) {
    console.log("Even: ", forloop);
  } else {
    console.log("Odd: ", forloop);
  }
}

// let num = 10;
// while (10 < 20){
//   console.log(num);
//   num++
// }

// Array

let newArray = ["apple", "banana", "orange", "lichi", "jackfruit", "pineapple"];

newArray.pop();
newArray.push("Guava");
newArray.shift();
newArray.unshift("Tomato");

console.log(newArray);
console.log(newArray[3]);
console.log(newArray.indexOf("lichi"));

// objects

let newPerson = {
  firstName: "Siam",
  lastName: "Abdullah",
  age: 17,
  number: "01778816262",
  email: "connect@siamabdullah.com",
};

console.log(newPerson.firstName, newPerson.lastName);
console.log("Age:", newPerson["age"]);
console.log("Phone Number:", parseInt(newPerson.number));
console.log("Email:", newPerson.email);

let newPersonName = "Sinan";
let age = 22;

console.log(`Hello this is ${newPersonName} and I am ${age} years old`);

let newStudent = {
  newStudentName: "Siam Abdullah",
  newStudentAge: 17,
  newStudentRoll: 7664,
  newStudentCollege: "Shaheed Ramiz Uddin Cantonment College",
  newStudentCountry: "Bangladesh",
  newStudentClass: "XI",
  // objects methods
  isAdmitted: function () {
    console.log(`${this.newStudentName} is already admitted in our college`);
  },
  studentAge: function () {
    console.log(`${this.newStudentAge} years old only`);
  },
  isCollege: function () {
    console.log(`He studied at ${this.newStudentCollege}`);
  },
};

newStudent.isAdmitted();
newStudent.studentAge();
newStudent.isCollege();

// console.log(newStudent.newStudentName);
// console.log(newStudent.newStudentAge);
// console.log(newStudent.newStudentRoll);
// console.log(newStudent.newStudentCollege);
// console.log(newStudent.newStudentCountry);
// console.log(newStudent.newStudentClass);

let items = ["Apple", "Banana", "Jackfruit"];

console.log(items);
console.log(items[2]);

let animals = ["Tiger", "Snake", "Elephant", "Frog", "Wolf", "Cat", "Dog"];

console.log(animals.concat(items));
console.log(animals.slice(0, 3));
// console.log(animals.splice(0, 6, "Horse", "Bard"));
console.log(animals.sort());
console.log(animals.reverse());

let numbers = [1, 3, 4, 5, 7, 9, 22, 35, 44];
// console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.reverse());

// document.getElementById("hello_section").innerHTML = "Siam Abdullah"

// let heading = document.getElementById("hello_section")
// heading.innerHTML = "Siam Abdullah"
// console.log(heading);

// let paragraph = document.getElementsByClassName("quote")
// paragraph.style.padding = "20px"

// document.getElementById("quote").innerHTML = "Programming";
// document.getElementById("quote").style.color = "white";
// document.getElementById("quote").style.backgroundColor = "black";
// document.getElementById("quote").style.padding = "15px";
// document.getElementById("quote").style.margin = "25px 50px";
// document.getElementById("quote").innerText = "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."

// let orange_color_background = document.getElementById("quote");
// orange_color_background.style.backgroundColor = "green";

// let border_radius = document.getElementById("quote");
// border_radius.style.borderRadius = "50px";

// let h1 = document.querySelector(".hello_section");
// h1.style.color = "white";

// document.querySelector(".hello_section").style.backgroundColor = "black";

// document.querySelector(".hello_section").style.padding = "15px";

// document.querySelector(".hello_section").style.margin = "0px 50px";

// document.querySelector(".hello_section").style.borderRadius = "50px";

function user(name = "user") {
  console.log(`Good Morning ${name}`);
}

user("Siam");
user("Nafiz");
user("Jubayer");

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(12, 50));

function substraction(number_one, number_two) {
  return number_one - number_two;
}

console.log(substraction(44, 4));

function fullName(firstName, lastName) {
  return `Hello! ${firstName} ${lastName}`;
}

console.log(fullName("Sinan", "Abdullah"));

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(20, 40));

const divition = (a, b) => a / b;
console.log(divition(4, 2));

// Immediate invoke function

(function () {
  console.log("Hello World!");
})();

(function () {
  console.log("Morden City!");
})();

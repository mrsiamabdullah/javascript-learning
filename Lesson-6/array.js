document.write("<h2> :How to create and use array </h2>");
document.write("<h2> :Loop an Array </h2>");
document.write("<h2> :Array library methods </h2>");

// Array
// var names1, names2, names3;
// names1 = "Siam";
// names2 = "Nafiz";
// names3 = "Anas";

// var names = [3];
// names[0] = "Siam Abdullah";
// names[1] = " Nafiz Abdullah";
// names[2] = " Anas Abdullah";
// names.push("Jubayer Abdullah");

// document.write(names.length + "</br>");

// document.write(names);

// names.pop();
// document.write(names);

// document.write("</br>");
// document.write("</br>");

// var name = names.concat(names2);
// document.write(name);

// Array library methods

var names_of_user = ["Anis", "Hamim", "Samir"];
console.log(names_of_user);

names_of_user.push("Siam");
names_of_user.pop();
names_of_user.shift();
names_of_user.unshift("Ashraful");

names_of_user.splice(2, 0, "Nafiz", "Jubayer");
console.log(names_of_user);
// names_of_user.splice(1,2)

var number = [20, 40, 60, 75, 90];
number.sort(function (a, b) {
  return b - a;
});
console.log(number);

var sortNames = names_of_user.sort();
console.log(sortNames);

var sortNames = names_of_user.sort();
sortNames.reverse();
console.log(sortNames);

var number = [20, 45, 30, 67];
number.sort();
console.log(number);

var number = [20, 550, 4356, 634, 234];
number.sort(function (a, b) {
  return b - a;
});
console.log(number);

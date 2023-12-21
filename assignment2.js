/*                                              ASSIGNMENT #2

Task 1:
Declare three variables, consisting of your first name, your last name, and a
nickname. Write a program that prints out your first name, then your nickname in
parenthesis, and then your last name.
*/
console.log("\nThe output of Task 1 is:\n");
var a = "Ameen ";
var b = "(nickname)";
var c = " Alam";
console.log(a+b+c);

/*
Task 2:
Write a JavaScript program to display your details like name, age, and address in three
different lines. All details will be taken as input from the user.
*/
console.log("\nThe output of Task 2 is:\n");
var a = prompt("Enter your name:");
var b = prompt("Enter your age:");
var c = prompt("Enter your address:");
console.log("Name = ",a);
console.log("Age = ",b);
console.log("Address = ",c);

/*
Task 3:
Write a JavaScript Program to Convert Kilometers to Miles. Take kilometer as an input
from user.
*/
console.log("\nThe output of Task 3 is:\n");
var kilometers = prompt("Enter the number of kilometers:");
var miles = kilometers * 0.621371;
parseFloat(kilometers);
console.log(`${kilometers} kilometers = ${miles} miles`);

/*
Task 4:
Write a JavaScript program that will accept the base and height of a triangle as input and
compute the area.
*/
console.log("\nThe output of Task 4 is:\n");
var base = prompt("Enter base of the triangle:");
parseFloat(base);
var height = prompt("Enter height of the triangle:");
parseFloat(height);
var area = 0.5 * base * height;
parseFloat(area);
console.log(`Area of triangle of base ${base} and height ${height} is ${area}`);

/*
Task 5:
Write a JavaScript program which take input of the radius of a circle from the user and
compute the area.
*/
console.log("\nThe output of Task 5 is:\n");
var radius = prompt("Enter radius of the circle:");
parseFloat(radius);
var area = 3.142 * radius * radius;
parseFloat(area);
console.log(`Area of Circle of radius ${radius} is ${area}`);

/*
Task 6:
Write a JavaScript program to find out the root of the quadratic equation. Provide at least
three set of values for a, b and c to get the output. a, b and c will be provided by the user
as input.
*/
console.log("\nThe output of Task 6 is:\n");
var a = parseFloat(prompt("Enter the value of a:"));
var b = parseFloat(prompt("Enter the value of b:"));
var c = parseFloat(prompt("Enter the value of c:"));

var discriminant = b * b - 4 * a * c;
if(discriminant > 0){
  var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log("Root 1:", root1);
  console.log("Root 2:", root2);
} 
else if(discriminant === 0){
  var root = -b / (2 * a);
  console.log("Root:", root);
}
else{
  var realPart = -b / (2 * a);
  var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
  console.log("Root 1:", realPart + " + " + imaginaryPart + "i");
  console.log("Root 2:", realPart + " - " + imaginaryPart + "i");}

/*
Task 7:
Write a JavaScript Program to check if a Number is Odd or Even. Take Number as input
from user.
*/
console.log("\nThe output of Task 7 is:\n");
var number = prompt("Enter a number:");
parseInt(number);
if(number %2 == 0){
    console.log("The number is even");
}
else console.log("The number is odd");

/*
Task 8:
Write JavaScript Program to Check if a Number is Positive, Negative or 0. Take Number as
input from user.
*/
console.log("\nThe output of Task 8 is:\n");
var number = prompt("Enter a number:");
parseInt(number);
if(number < 0){
    console.log("The number is negative");
}
else if(number > 0){
    console.log("The number is positive");    
}
else console.log("The number is zero");

/*
Task 9:
Write a JavaScript program to check whether a number is divisible by another number.
Accept two integer values form the user as the input.
*/
console.log("\nThe output of Task 9 is:\n");
number1 = prompt("Enter the first integer:");
parseInt(number1);
number2 = prompt("Enter the second integer:");
parseInt(number2);
if (number1 % number2 === 0) {
  console.log(`${number1} is divisible by ${number2}`);
} else {
  console.log(`${number1} is not divisible by ${number2}`);
}
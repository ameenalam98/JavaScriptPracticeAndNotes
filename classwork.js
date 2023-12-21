// var greetings = "Good Morning" //string
// var age = 22; //number
// var adult = true; //boolean
// var weight = 69.69; //float

// var newage = age + 10;
// // alert(greetings)
// console.log("The new age is", newage);

// //swapping exercise
// var a = 5;
// var b = 6;

// a = a + b; // 11
// b = a - b; // 5
// a = a - b; // 6

// console.log("Value of a is", a)
// console.log("Value of b is", b)

// //Increment and Decrement
// var age = 20;

// console.log(age++)
// console.log(age)

// var a = 4;
// var b = 3;
// var c = a++ + --b;
// c = c - --a;
// console.log(a)
// console.log(b)
// console.log(c)

// //taking prompt from user
// // var price = prompt("Product Cost?");
// var tax = 5;
// console.log(typeof(price))
// console.log("Total price after tax is",parseInt(price)+tax);

// var num = prompt("Enter a number:");
// for (var i=1; i<=10; i++){

//     if(i==5){
//         break;
//     }
//     console.log(num+" x "+i+" = "+(num*i));
// }

// console.log(" ");
// var num = prompt("Enter a number:");
// for (var i=1; i<=10; i++){

//     if(i==5){
//         continue;
//     }
//     console.log(num+" x "+i+" = "+(num*i));
// }

// console.log(" ");
// var num = parseInt(prompt("Enter a number:"));
// var IsPrime = true //for identification of prime number
// if(num == 1){
//     console.log("It is a composite number.")
// }
// else if(num >= 2){ //greater than 2 or not
//     for(var i=2; i<num; i++){ //iteratable defintion.
//         if(num % i == 0){
//             IsPrime = false
//             break;
//         }
// }
// if(IsPrime){
//     console.log("This is a prime number.")
// }
// else console.log("This is not a prime number.")
// }

// var n = 5; //Input from user length for pyramid
// var string = ""; //Pyramid
// for(i = 1; i <= n; i++ ){ //selecting number of lines
//     for(j = 0; j < i; j++ ){ //deciding for how many stars
//         string += "*"
//     }
//     string += "\n"; //linebreak (new line)
// }
// console.log(string)

// var food = ["pizza","burger","fries"]
// food[1] = "sandwich"
// console.log(food)

// var foods = []
// foods.push("Pizza")
// foods.push("Fries")
// foods.push("Sandwich")
// console.log(foods)

// var arr = [2,3,4,5,6,7]
// var userInput = prompt("Enter number:")
// for(i = 0; i < arr.length; i++){
//     if(arr[i] == userInput){
//         console.log("The number is found in the array.")
//     }
// }

// // Make a dice
// function congratulations(para1){
//     console.log("Hurrah it's a",para1);
// }
// var num = Math.random();
// console.log("Random number is:",num);
// var dice = Math.floor((num * 6) + 1) ;
// console.log("Dice is",dice);
// congratulations(dice); //passing a value

// //Function to add two values
// function addValues(param1,param2){
//     return param1 + param2;
//  }
//  var sum = addValues(1,2);
// console.log("Sum is",sum)

// /*Make a program using three functions (valid, invalid & checkValidation)
// to check if the user input age is valid for licence.*/
// var age = prompt("Enter your age:");
// function checkValidation() {
//     if(age >= 18) {
//         valid();}
//     else {
//         invalid();}
// }
// function valid() {
//     console.log("You are eligible for licence because your age is",age);
// }
// function invalid() {
//     console.log("You are not eligible for licence because your age is",age);
// }
// checkValidation(age);
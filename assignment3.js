/*                                              ASSIGNMENT #3

Task 1:
Write commands to perform operations on list L[5,6,8,9,2,1] to convert
it into :
a. [1,2,5,6,8,9]
b. [1,2,6,8,9]
c. [1,2,6,8,9,10]
d. [10,9,8,6,2,1]
e. [8]
*/
console.log("\nThe output of Task 1 is:\n");
var L = [5, 6, 8, 9, 2, 1];
// a.
console.log("Part (a):\n");
var a = L.slice().sort((a, b) => a - b);
console.log(a);

// b.
console.log("\nPart (b):\n");
var b = L.slice().filter(num => num !== 5).sort((a, b) => a - b);
console.log(b);

// c.
console.log("\nPart (c):\n");
var c = L.slice().filter(num => num !== 5).concat(10).sort((a, b) => a - b);
console.log(c);

// d.
console.log("\nPart (d):\n");
var d = L.slice().filter(num => num !== 5).concat(10).sort((a, b) => a - b).reverse();
console.log(d);

// e.
console.log("\nPart (e):\n");
var e = [L[2]];
console.log(e);

/*
Task 2:
Write a JavaScript program to summarize all the items in a list. First,
take no of the element and number as input from the user and insert it
into the list
Expected Output:
Input no of element: 3
Input no: 2
Input no: 6
Input no: 14
The sum is: 22
*/
console.log("\nThe output of Task 2 is:\n");
function summarizeList() {
    var list = [];
    var noOfElements = parseInt(prompt("Input no of element:"));
  
    for (var i = 0; i < noOfElements; i++) {
      var num = parseInt(prompt("Input no:"));
      list.push(num);
    }
    var sum = list.reduce((acc, val) => acc + val, 0);
    console.log("The sum is:", sum);
  }
  summarizeList();
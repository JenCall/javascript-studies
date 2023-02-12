//Variables:
//var keyword from 1995 to 2015 - let and const keywords added in 2015. Use var to run your code in older browsers.

//const
const word = 'word' //constant values and cannot be changed;
console.log(word);


//let: -cannot be Redeclared, -must be Declared before use, -has Block Scope.
let name = "Jane Lopez"
//let name = "Carl Schmidt"
console.log(name) //SyntaxError: Identifier 'name' has already been declared


//JavaScript has 8 Datatypes
// 1. String, 2. Number,  3. Bigint, 4. Boolean, 5. Undefined, 6. Null, 7. Symbol, 8. Object

// String:
let language = "English"

// Numbers:
let length = 16;
let weight = 7.5;

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


function getClickData(string) {
    return string;
}

console.log(getClickData("Hello World"));

let a = 4;
function myFunction() {
  return a * a;
}

console.log(myFunction());
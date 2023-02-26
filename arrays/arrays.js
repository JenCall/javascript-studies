

// push()
// to add one or more elements to the end of an array.
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');

console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// You can also push multiple elements at once by passing them as arguments to the push() method, like this:

let numbers = [1, 2, 3];
numbers.push(4, 5, 6);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]


// pop() 
// to remove the last element and return the removed element.

let fruit_2 = ['apple', 'banana', 'orange', 'grape'];
let lastFruit = fruits.pop();

console.log(lastFruit); // Output: 'grape'
console.log(fruit_2); // Output: ['apple', 'banana', 'orange']


let numbers_2 = [1, 2, 3, 4, 5];
numbers_2.pop();

console.log(numbers_2); // Output: [1, 2, 3, 4]

// shift() 
// to remove the first element and return the removed element. 

let fruits_3 = ['apple', 'banana', 'orange', 'grape'];
let firstFruit = fruits.shift();

console.log(firstFruit); // Output: 'apple'
console.log(fruits_3); // Output: ['banana', 'orange', 'grape']

// You can also use the shift() method without assigning the removed element
let numbers_3 = [1, 2, 3, 4, 5];
numbers_3.shift();

console.log(numbers_3); // Output: [2, 3, 4, 5]

// unshift()
// to add one or more elements to the beginning of an array.
let fruits_4 = ['banana', 'orange', 'grape'];
fruits_4.unshift('apple');

console.log(fruits_4); // Output: ['apple', 'banana', 'orange', 'grape']

// filter() 
// to create a new array with all the elements that pass a certain test provided by a callback function.

let numbers_4 = [1, 2, 3, 4, 5];
let evenNumbers = numbers_4.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

// arrow function syntax for the callback function
let numbers_5 = [1, 2, 3, 4, 5];
let evenNumbers_2 = numbers_5.filter(number => number % 2 === 0);

console.log(evenNumbers_2); // Output: [2, 4]

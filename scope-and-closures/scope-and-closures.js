// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// Lexical scoping
function init() {
    var name = "Hello World"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
// Scoping with let and const
if (Math.random() > 0.5) { // blocks with curly braces do not create scopes for var.
    var x = 1;  // var statements here actually create a global variable.
} else {
    var x = 2;
}
console.log(x);
  
// In ES6, JavaScript introduced the let and const declarations, which, among other things like temporal dead zones, allow you to create block-scoped variables.
if (Math.random() > 0.5) {
    const y = 1;
} else {
    const y = 2;
}
// console.log(y); // ReferenceError: x is not defined

// Closure
function makeFunc() {
    const name = "JavaScript";
    function displayName() {
      console.log(name);
    }
    return displayName;
}
  
const myFunc = makeFunc();
myFunc();
  

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
}
  
const add5 = makeAdder(5);
const add10 = makeAdder(10);
  
console.log(add5(2)); // 7
console.log(add10(2)); // 12
  

// Pratical of closures

function makeSizer(size) {
    return function () {
      document.body.style.fontSize = `${size}px`;
    };
}
  
const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
  
// Closure scope chain
// Every closure has three scopes:

// 1. Local scope (Own scope)
// 2. Enclosing scope (can be block, function, or module scope)
// 2. Global scope
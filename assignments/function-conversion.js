// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => console.log('Function was invoked!')

myFunction()

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (param) => param 
console.log(anotherFunction('Example'))

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (a, b) => a + b
console.log(add(1, 2))

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (a, b) => a - b
console.log(subtract(1, 2))

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

exampleArray = [1, 2, 3, 4]

extraArray = [5, 10, 15, 20]

everythingIs = [19, 42]

const triple = (arr) => arr.map((num => num * 3)) 

console.log(triple(exampleArray))
console.log(triple(extraArray))
console.log(triple(everythingIs))


// Exports
module.exports = {
    myFunction,
    anotherFunction,
    add,
    subtract,
    triple
  }

//* =========================================
//* Math Object in JavaScript
//* =========================================

//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with the Number type. It doesn't work with BigInt.

//? 1: Constants:
//* - Math.PI: Represents the mathematical constant Pi (π).
// const piValue = Math.PI;
// console.log(piValue);


//* =========================================
//* 2. Basic Operations:
//* =========================================

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive

// console.log(Math.abs(5));
// console.log(Math.abs(-115));

//? Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(3.7);
// console.log(roundedValue);

//? Math.ceil(x): Returns the value of x rounded up to its nearest integer:
// const ceilValue = Math.ceil(3.7);
// console.log(ceilValue);

//? Math.floor(x): Returns the value of x rounded down to its nearest integer.
// const floorValue = Math.floor(3.7);
// console.log(floorValue);

//? Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(3.7);
// console.log(truncValue);



//* =========================================
//* 3. Exponential and Logarithmic Functions:
//* =========================================

//? Math.pow(x, y): Returns the value of x to the power of y.
console.log(Math.pow(2, 5));
console.log(2 ** 5);

//? Math.sqrt(): Math.sqrt(x) returns the square root of x:
let squareRoot = Math.sqrt(25);
console.log(squareRoot);

//? Math.log(x) returns the natural logarithm of x.
let logResult = Math.log(1);
let logResult1 = Math.log(2);
console.log(logResult);
console.log(logResult1);

//? Math.log2(x) returns the base 2 logarithm of x.
let logResult2 = Math.log2(8);
console.log(logResult2);

//? Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

console.log((Math.random() * 100).toFixed(3));
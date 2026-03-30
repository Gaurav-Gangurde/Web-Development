//  3 students at a same time wants to find the sum of two numbers

//* 1st student
var a = 5,
  b = 10;
var sum1 = a + b;
console.log(sum1);

//* 2nd student
var a = 15,
  b = 15;
var sum2 = a + b;
console.log(sum2);

//* 3rd student
var a = 55,
  b = 15;
var sum3 = a + b;
console.log(sum3);

//! lets make a reusable code

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5));
console.log(sum(15, 50));
console.log(sum(25, 750));


//* =========================================
//* Function Declaration & Calling a Function
//* =========================================

function greet() {  //Declare function
   console.log("Hello Guys, Welcome to jurassic park");
   
}

greet();    //Call function


//* ==============================
//* Function Argument:
//* ==============================

function greet(name) {
  console.log("Hello " + name + ", Welcome to Thapa Technical JS Course");
}

greet("ram");
greet("sita");


//* ==============================
//* Function expressions
//* ==============================

var result = function sum(a, b) {
  console.log(a + b);
};

result(10, 15);


//* ==============================
//*  Anonymous Function
//* =============================

var result = function (a, b) {
  console.log(a + b);
};

result(10, 15);


//* ==============================
//*  Return Keyword
//* =============================

//! Example 1: Returning a Sum of two number

function sum(a, b) {
  //   console.log(a + b);
  return a + b;
  console.log("hello I am function");
}

var result = sum(5, 5);
// console.log(result);

console.log("the sum of two number is " + result);

// console.log(sum(5, 5));
// console.log(sum(15, 50));
// console.log(sum(25, 750));


//* ==============================
//* IIFE - immediately invoked function expression
//* =============================

// Syntax
// (function () {
//   // code to be executed
// })();

var result = (function (a, b) {
  console.log(a + b);
  return a + b;
})(5, 10);

console.log("the sum of two number is " + result);
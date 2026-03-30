//* ===================================
//* Interview Question:
//* ===================================
//! Write a program to perform mathematical operations using callback functions and two variables in JavaScript.

//? Instructions:
//? Define a higher-order function called mathOperation that takes three arguments: x, y, and operation.
//? Implement two callback functions:
//? add: Takes two numbers x and y and returns their sum.
//? sub: Takes two numbers x and y and returns the result of subtracting x from y.
//? Use the mathOperation function to perform addition and subtraction operations on two variables a and b.
//? Display the results of the operations.

const mathOperation = (a, b, operation) => {
    return operation(a, b);
  };
  
  const add = (a, b) => {
    return a + b;
  };
  
  const sub = (a, b) => {
    return b - a;
  };
  
  console.log(mathOperation(5, 15, add));
  console.log(mathOperation(5, 15, sub));
  
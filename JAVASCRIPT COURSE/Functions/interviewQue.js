//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// console.log(calculator(5, 2, '+')); // Output: 7
// console.log(calculator(8, 4, '-')); // Output: 4
// console.log(calculator(10, 2, '/')); // Output: 5

// const calculator = (num1, num2, operator) => {
//   let result;
//   switch (operator) {
//     case "+":
//       return num1 + num2;

//     case "-":
//       result = num1 - num2;
//       return result;

//     case "*":
//       result = num1 * num2;
//       return result;

//     case "/":
//       if (num2 === 0) {
//         return "0 is not allowed";
//       } else {
//         result = num1 / num2;
//         return result;
//       }

//     default:
//       return "no operator found";
//   }
// };

// console.log(calculator(5, 2, "+")); // Output: 7
// console.log(calculator(8, 4, "-")); // Output: 4
// console.log(calculator(10, 0, "/")); // Output: 5

//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.

// const isReverse = (str) => {
//   let reverse = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     reverse = reverse + str[char];
//   }
//   return reverse;
// };

// console.log(isReverse("vinod thapa"));

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

// // isi     isi
// radar
// level
// const isPalindrome = (str) => {
//   let reverse = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     reverse = reverse + str[char];
//   }
  //   if (str === reverse) {
  //     return true;
  //   } else {
  //     return false;
  //   }

//   return str === reverse ? true : false;
// };

// console.log(isPalindrome("level"));
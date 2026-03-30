//! What is the difference between == and === operators in JavaScript❓
//? The equality == operator is a comparison operator that compares two values and returns true if they are equal. 
//? The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.
// ex.

let num1 = 1;
let num2 = "1";

if (num1 === num2) {
  console.log("equal");
} else {
  console.log("not equal");
}



//? Combining logical operators allows you to create complex conditions:
//* Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license❓

var age = 19;
var hadDrivingLicense = false;

// age > 18
// age == 18
console.log(age >= 18 && hadDrivingLicense);
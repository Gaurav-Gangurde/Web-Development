//! 1: Write a program to check if a number is even or odd.
var num = "7";
if (num % 2 === 0) {
  console.log("Num is even");
} else {
  console.log("Num is odd");
}

//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

var num = 13;
var isPrime = true;

for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Num is prime");
} else {
  console.log("Num is not prime");
}

//! 3: Write a program to check if a number is positive, negative, or zero.
var num = -10;
if (num === 0) {
  console.log("NUm is zero");
} else if (num > 0) {
  console.log("NUm is positive ");
} else {
  console.log("NUm is negative ");
}

//! 4: Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

var areaOfShapes = "circle";
var a = 5;
var b = 10;
var result;
switch (areaOfShapes) {
  case "square":
    result = a * a;
    console.log(result);
    break;

  case "rectangle":
    result = a * b;
    console.log(result);
    break;

  case "circle":
    var r = 2;
    result = 3.142 * (r * r);
    console.log(result);
    break;

  default:
    console.log("No shape matches");
}


//! 5: Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻

var sum = 0;
debugger;
for (var num = 1; num <= 10; num++) {
  var sum = sum + num;
}
console.log(sum);


//! 6: Generating a times table of 5 with a for loop.
// var num = 1;
// while (num <= 10) {
//   console.log("5 * " + num + " = " + 5 * num);
//   //   console.log(`5 * ${num} = ${5 * num}`);
//   num++;
// }

for (var num = 1; num <= 10; num++) {
  console.log("5 * " + num + " = " + 5 * num);
}


//! 7: program To check if a year is a leap year🧑‍💻
//? If a year is divisible by 4 and not divisible by 100, or
//? If a year is divisible by 400,
// then it is a leap year. Otherwise, it is not a leap year.

var year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year, "it's a leap year");
} else {
  console.log(year, "it's not a leap year");
}

//! 8: Drawing Patterns with Asterisks: 🧑‍💻

//*       i\j  1    2    3    4    5
//*       ----------------------------
//*       1    *    -    -    -    -
//*       2    *    *    -    -    -
//*       3    *    *    *    -    -
//*       4    *    *    *    *    -
//*       5    *    *    *    *    *

for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + " *";
  }
  console.log(pattern);
}

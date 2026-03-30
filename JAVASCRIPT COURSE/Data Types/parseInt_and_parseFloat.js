//* ========== parseInt & parseFloat Section ==========

//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).

const myString = "42";
const myNumber = parseInt(myString);
console.log(myNumber); // Output: 42

const myStr = "42.5";
const myNum = parseInt(myStr);
console.log(myNum); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).

const myStr1= "42.5";
const myNum1 = parseFloat(myStr1);
console.log(myNum1); // Output: 42.5
//* String Properties:
//? length: Property that returns the length of the string (number of characters).

// const str = "Hello,    World!";
// console.log(str.length);
// including space n all

//* Escape Character

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " Gaurav Gangurde " & I am a Full Stack Developer. "; // Error

// let text1 =
//   "My name is ' Gaurav Gangurde ' & \ I am a \"Full Stack \" Developer. ";

// let text3 = 'My name is "Gaurav Gangurde " & I am a Full Stack Developer. ';

// // console.log(text);
// console.log(text1);
// console.log(text3);


//* =========================================
//* Other Useful Methods:
//* =========================================

// //? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter.
// const str = "apple,orange,banana";
// let strArr = str.split(",").reverse().join();
// console.log(strArr);
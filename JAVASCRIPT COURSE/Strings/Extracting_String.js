//* Extracting String Parts:

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6);
// let result1 = text.slice(6, 16);
// console.log(result);
// console.log(result1);

//? a: substring: Extracts a portion of the string based on starting and ending indices.

// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// console.log(result);


//* =========================================
//* Extracting String Characters
//* =========================================

//? charAT() : The charAt() method returns the character at a specified index (position) in a string

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result1 = text.charAt(-6);
// console.log(result);
// console.log(result1);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);


//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

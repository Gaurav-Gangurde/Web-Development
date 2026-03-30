//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// syntax
// indexOf(searchString)
// indexOf(searchString, position)

// let text = "Gaurav Gangurde";
// console.log(text.indexOf("Gangurde"));
// console.log(text.indexOf("Gangurde"));
// The indexOf() method is case sensitive.

// let strArr = Array.from(text);
// console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let index = text.indexOf("JavaScript");
// let index1 = text.lastIndexOf("JavaScript");
// let index2= text.lastIndexOf("JavaScript", 40);
// console.log(index);
// console.log(index1);
// console.log(index2);

//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/Javascript/i);
// console.log(result);


//? match() : Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");
// let result1 = text.match("JavaScript");
// let result2 = text.match(/Javascript/gi);

// console.log(result);
// console.log(result1);
// console.log(result2);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = text.matchAll("javascript");
// let matchResult1 = text.matchAll("JavaScript");
// console.log(...matchResult);
// console.log(...matchResult1);

// for (let item of matchResult) {
//   console.log(item[0]);
// }

// for (let index of matchResult) {
//   console.log(index.index);
// }

// for (let { index } of matchResult) {
//   console.log(index);
// }

//? includes(): Returns true if the string contains the specified value, and false otherwise.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes("/java/i");
// let includeResult1 = text.includes("J");
// console.log(includeResult);
// console.log(includeResult1);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result1 = text.startsWith("Hello");
// console.log(result);
// console.log(result1);

// //* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result1 = text.startsWith("welcome", 17);
// console.log(result);
// console.log(result1);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.endsWith("welcome");
let result1 = text.endsWith("course");
console.log(result);
console.log(result1);
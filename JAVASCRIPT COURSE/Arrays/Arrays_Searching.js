//*  Searching in an Array

const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);

console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.


const result = numbers.indexOf(6);
console.log(result);
const result1 = numbers.lastIndexOf(6);
console.log(result1);
const result2 = numbers.indexOf(6, 5);
console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.

// Syntax
// includes(searchElement);
// includes(searchElement, fromIndex);

const res = numbers.includes(5);
console.log(res);
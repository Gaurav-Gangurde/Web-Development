//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1

let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.

// console.log(fruits.push("guava"));
// console.log(fruits);

// The push() method returns the new length.

//? 2: pop(): Method that removes the last element from an array.

// console.log(fruits.pop());
// console.log(fruits);

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.

// console.log(fruits.unshift("guava"));
// console.log(fruits);

//? 4: shift(): Method that removes the first element from an array.

// console.log(fruits.shift());
// console.log(fruits);


//? 5: The splice(): method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

fruits.splice(1, 1, "grapes");
console.log(fruits);
//* ==============================
//* LocalStorage
//* ==============================

//? The localStorage object allows you to save key/value pairs in the browser.

// How to add the data from localStorage
localStorage.setItem("youtubeJsCourse", "addingData");

// How to get the data from localStorage
localStorage.getItem("youtubeJsCourse");

// How to remove the data from localStorage
localStorage.removeItem("youtubeJsCourse");

//todo Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringify:

//* JSON.stringify: Converts a JavaScript object into a JSON string.
// Useful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format.
// const data = { name: "Gaurav", age: 22, city: "Nashik" };
// const jsonString = JSON.stringify(data);
// console.log(jsonString);
// Output: '{"name":"Gaurav","age":22,"city":"Nashik"}'

//* JSON.parse: Converts a JSON string into a JavaScript object.
// Useful when you receive JSON data from a server or read it from a file, and you want to work with it as a JavaScript object.

const jsonString = '{"name":"Gaurav","age":22,"city":"Nashik"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);
// Output: { name: 'Gaurav', age: 22, city: 'Nashik' }

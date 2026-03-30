//? Q. What is the purpose of typeof operator in javascript ?

// var MyName = "Gaurav";
// // var MyName = "1";  this number is a String
// console.log(MyName);
// console.log(typeof MyName);



//? What is the result of typeof null in javaScript ?

// var badMemories = null;
// console.log(badMemories);
// console.log(typeof badMemories);

//? Convert a string to a number

// var myFavNum = "10";
// console.log(typeof +myFavNum);
// console.log(typeof Number(myFavNum));

//? Convert a number to a string?

// var myFavNum = 10 ;
// console.log(typeof +myFavNum);
// console.log(typeof String(myFavNum));
// console.log(typeof (myFavNum + ""));


//? To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

// var myName = -5;
// if (true) {
//   console.log("this is truthy value");
// } else {
//   console.log("its a falsy value");
// }


//? What is the purpose of the NaN value in JavaScript❓
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function.

console.log(isNaN("Gaurav"));
console.log(parseInt("xyz"));
console.log(parseInt("@#$"));

// //! NaN === NaN, Why is it false ❓
if (NaN == NaN) {
  console.log("both are equal ");
} else {
  console.log("not equal");
}




  




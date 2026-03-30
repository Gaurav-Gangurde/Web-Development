//* ===================================
//* 1: Assignment operator
//* ===================================

// var myFavNum = 6; // to assign the value is called assignment operator
// console.log(myFavNum);


//* ===================================
//* 2: Arithmetic operators
//* ====================================

//? Addition (+): Adds two values or variables.

var x = 5;
var y = 10;
var sum = x + y;
console.log(sum);

//? Subtraction (-): Subtracts the right operand from the left operand.

var a = 10;
var b = 7;
var difference = a - b;
console.log(difference);

//? Multiplication (*): Multiplies two values or variables.

var p = 4;
var q = 6;
var product = p * q;
console.log(product);

//? Division (/): Divides the left operand by the right operand.

var m = 15;
var n = 3;
var quotient = m / n;
console.log(quotient);

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.

var c = 17;
var d = 5;
var remainder = c % d;
console.log(remainder);

//* ===================================
//* 3: String Operators
//* ===================================
//? concatenate String

var str1 = "Hello ";
var str2 = "World";
var str3 = str1 + str2;
console.log(str3);


//* ===================================
//* 4: comparison operators
//* ===================================

//? Equal (==): Checks if two values are equal, performing type coercion if necessary.

console.log(5 == "5");

//? Strict Equal (===): Checks if two values are equal without performing type coercion.

console.log(5 === "5");

//? Not Equal (!=   👉 ! =): Checks if two values are not equal, performing type coercion if necessary.

console.log(5 != 5);

//? Greater Than (>): Checks if the value on the left is greater than the value on the right.

// Example: 10 > 5 evaluates to true.

console.log(5 > 2);

//? Less Than (<): Checks if the value on the left is less than the value on the right.

// Example: 5 < 10 evaluates to true.

console.log(5 < 10);

//? Greater Than or Equal To (>=): Checks if the value on the left is greater than or equal to the value on the right.
// Example: 10 >= 10 evaluates to true.

console.log(10 <= 10);

//? Less Than or Equal To (<=): Checks if the value on the left is less than or equal to the value on the right.
// Example: 5 <= 10 evaluates to true.

console.log(5 >= 10);



//* ===================================
//* 5: Logical operators in JavaScript
//* ===================================

//? Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:

var x = 5;
var y = 10;
console.log(x > 0 && y < 0);

//? Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:

var a = 15;
var b = 0;
console.log(a > 10 || b > 10);

//? Logical NOT (!): Returns true if the operand is false, and false if the operand is true.
// Example:

var isOpen = false;
console.log(!isOpen);


//* ===================================
//* 6: Unary operator
//* ====================================

//? Unary Plus (+): Converts its operand into a number. If the operand is not already a number, it attempts to convert it.

console.log(+3);
console.log(+"5");

//? Unary Negation (-): Negates its operand, converting non-numbers into numbers and then negating them.

console.log(-5);
console.log(-"3");

//? Prefix Increment (++x) and Prefix Decrement (--x): In prefix form, the value of the operand is first incremented or decremented, and then the result is returned.

var x = 5;
var y = --x;
console.log(y);
console.log(x);

//? Postfix Increment (x++) and Postfix Decrement (x--): In postfix form, the value of the operand is first returned, and then it is incremented or decremented.

var x = 5;
var y = x++;
console.log(y);
console.log(x);


//* ===================================
//* 7: Conditional (ternary) operator
//* ====================================

//? syntax: condition ? expressionIfTrue : expressionIfFalse;

//* write a program to check if the candidates isEligibleForDrive or not? Age must be equal to or greater then 18.

var age = 19;
var result = age >= 18 ? "Yes" : "No";
console.log(result);
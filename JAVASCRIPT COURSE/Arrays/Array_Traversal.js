let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//* 1: for of loop :

for (let item of fruits) {
  console.log(item);
}

for (let item = 0; item < fruits.length; item++) {
  console.log(fruits[item]);
}

//* 2: for in loop:

for (let item in fruits) {
  console.log(item);
}

//* 3: forEach Method:

const myForEachArr = fruits.forEach((curElem, index, arr) => {
  return `${curElem} ${index}`;
  //   console.log(arr);
});
console.log(myForEachArr);

//* 4: map function:

const myMapArr = fruits.map((curElem, index, arr) => {
  return ` my fav fruit is ${curElem} `;
  //   console.log(arr);
});

console.log(myMapArr);
console.log(fruits);
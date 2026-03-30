//* ===============================
//* If Statement
//* ===============================

//? Example: Let check the temperature

var temperature = 25;
if (temperature > 30) {
  console.log("lets go to beach");
} else {
  console.log("tv dekhte hai yr");
}

//* ===============================
//* Else If Ladder Statement
//* ===============================

//? Examole : We can also use an else if clause to check additional conditions.

var temperature = 15;
if (temperature >= 30) {
  console.log("lets go to beach");
} else if (temperature >= 20 && temperature < 30) {
  console.log("tv dekhte hai yr");
} else {
  console.log("kambhal oodo so jawo");
}
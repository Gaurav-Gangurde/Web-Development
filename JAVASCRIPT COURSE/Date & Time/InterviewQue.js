//! ==================
//! Interview Questions
//! =================

//! 1: Write a function to add a specified number of days to a given date.

const addDaysToDate = (date, extraDay) => {
  //   console.log(date);
  //   console.log(date.setDate(date.getDate() + extraDay));
  //   console.log(new Date(1709769600000));
  let updatedDate = date.setDate(date.getDate() + extraDay);
  return new Date(updatedDate);
};

// Example usage:
const date = new Date("2024-02-29");
const newDate = addDaysToDate(date, 7);
console.log(newDate);
console.log(newDate.toLocaleDateString());

//! Question: Write a function to calculate the difference in days between two given dates.

const getDaysDifference = (d1, d2) => {
  let oneDay = 24 * 60 * 60 * 1000;
  let diff = Math.abs(d1 - d2);
  return Math.round(diff / oneDay);
};

// Example usage:
const date1 = new Date("2024-02-19");
const date2 = new Date("2024-03-01");
console.log(getDaysDifference(date1, date2)); // Output: 11 (difference in days)

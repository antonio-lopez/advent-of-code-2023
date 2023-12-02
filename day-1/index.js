// https://adventofcode.com/2023/day/1

// ===========================================================================
const fs = require("fs");

const replaceStrToNum = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

const partTwo = () => {
  const response = fs.readFileSync("input.txt").toString().split("\n");

  const foundValues = response.map((val) => {
    const arr = [...val.matchAll(regex)].map((x) => x[1]);
    return arr;
  });

  const doubleDigits = foundValues.map(
    // check to see if the current value is in the replaceStrToNum object
    // if true, convert string to num and return, else return num
    (v) =>
      (replaceStrToNum[v[0]] ? replaceStrToNum[v[0]] : v[0]) +
      (replaceStrToNum[v[v.length - 1]]
        ? replaceStrToNum[v[v.length - 1]]
        : v[v.length - 1])
  );
  console.log(
    doubleDigits.map((v) => Number(v)).reduce((acc, curr) => acc + curr)
  );
};

partTwo();
//  working solution for first part
//  answer is 54100
// ===========================================================================

// ===========================================================================
// const partOne = () => {
//   let doubleDigit = [];
//   const response = fs
//     .readFileSync("input.txt")
//     .toString()
//     .replace(/[a-z]/g, "")
//     .split("\n");

//   const res = response.map((value) => value.split(""));
//   const result = res.map(
//     (val) => (doubleDigit = Number(val[0] + val[val.length - 1]))
//   );
//   console.log(result.reduce((acc, curr) => acc + curr));
// };

// partOne();
//  working solution for first part
//  answer is 54877
// ===========================================================================

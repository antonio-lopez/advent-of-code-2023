// https://adventofcode.com/2023/day/2

// ===========================================================================
const fs = require("fs");

const partTwo = () => {
  const input = fs.readFileSync("input.txt").toString().split("\n");
  const result = input.map((val) => {
    const MAX_VAL = {
      red: 0,
      green: 0,
      blue: 0,
    };

    val
      .split(": ")
      .pop()
      .split("; ")
      .map((val) => {
        return val.split(", ").map((val) => {
          const [count, color] = val.split(" ");
          if (MAX_VAL[color] < +count) {
            MAX_VAL[color] = +count;
          }
        });
      });

    return MAX_VAL.red * MAX_VAL.green * MAX_VAL.blue;
  });

  console.log(result.reduce((acc, curr) => acc + curr));
};

partTwo();
//  working solution for second part
//  answer is 58269
// ===========================================================================

// ===========================================================================

// const fs = require("fs");

// const MAX_VAL = {
//   red: 12,
//   green: 13,
//   blue: 14,
// };

// const partOne = () => {
//   const input = fs.readFileSync("input.txt").toString().split("\n");
//   const removed = input
//     .map((val) => {
//       return val
//         .split(": ")
//         .pop()
//         .split("; ")
//         .map((val) => {
//           const game = val.split(", ");
//           return game.every((pull) => {
//             const [val, color] = pull.split(" ");
//             return MAX_VAL[color] >= +val;
//           });
//         })
//         .every((t) => t);
//     })
//     .reduce((acc, curr, i) => {
//       return curr ? acc + (i + 1) : acc;
//     });
//   console.log(removed);
// };

// partOne();
//  working solution for first part
//  answer is 2101
// ===========================================================================

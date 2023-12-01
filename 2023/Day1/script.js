import exp from "constants";
import fs from "fs";
/*
const lines = fs.readFileSync("example1.txt", "utf8").trim().split("\n");

const lines2 = lines;

const digits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
for (let j = 0; j < lines.length; j++) {
  //console.log(lines[line]);
  console.log("----", lines[j]);
  for (let digit in digits) {
    for (let i = 3; i < lines[j].length; i++) {
      if (lines[j].substring(0, i).includes(digit)) {
        console.log("found", digit, "at", i, " ", lines[j].substring(0, i));
        lines[j] = lines[j].substring(0, i).replace(digit, digits[digit]);
      }
    }

    console.log(j, ": ", lines[j]);
  }
  console.log("----");
}
*/
export function partOne(file) {
  const lines = fs.readFileSync(file, "utf8").trim().split("\n");
  const values = lines.map((line) => {
    const first = line.split("").find((v) => !Number.isNaN(Number(v)));
    const last = line
      .split("")
      .filter((v) => !Number.isNaN(Number(v)))
      .reduce((s, v) => s + v)% 10;
    return Number(first + last );
  });
  return values.reduce((s, v) => s + v);
}
export function partTwo(file) {
  return partOne(file);
}

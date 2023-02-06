/*---------04) Coding-Task: Variables--------*/
/*----01) Spot the errors and fix them----*/
console.log("01) Spot the errors and fix them");

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  let result = name.length;
  return result;
}
/*----02) isString function--*/

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

console.log("02) isString function");

const isString = function (value) {
  return typeof value === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true

//Greet Function

function welcomeMsg() {
  return "Stefan";
}

console.log(welcomeMsg(""));

//Gross Price Function

function grossPrice(a, b) {
  a = 20;
  b = 0.19;

  return a * b + a;
}
console.log(grossPrice());

/*2.Variante test - rundet so hoch auf
  function grossPrice2(a, b) {
    a = 20;
    b = 1.19;
    c = a * b;
    return Math.ceil(c);
  }
  console.log(grossPrice2());
  */

function grossPrice2(a, b) {
  a = 40;
  b = 0.16;

  return a * b + a;
}
console.log(grossPrice2());

console.log("Ende Gross Price Function");
// add positive number

function addPositiveTest1(a, b) {
  a = 5;
  b = 9;
  return a + b;
}
console.log(addPositiveTest1());

function addPositiveTest2(a, b) {
  a = 5;
  b = -9;
  return a + Math.abs(b);
}
console.log(addPositiveTest2());

console.log("Test Ende");

// result1 should be 5
function addPositive(a, b) {
  a = 2;
  b = 3;
  return a + b;
}
console.log(addPositive());

// result1 should be 8

function addPositive2(a, b) {
  a = 3;
  b = -5;
  return a + Math.abs(b);
}
console.log(addPositive2());

// result1 should be 9

function addPositive3(a, b) {
  a = -1;
  b = -8;
  return Math.abs(a + b);
}
console.log(addPositive3());

/* auach möglich , für den zufällige Zahlenwerte
function addPositive3(a, b) {
  a = -1;
  b = -8;
  return Math.abs(a) + Math.abs(b);
}
console.log(addPositive3());
*/

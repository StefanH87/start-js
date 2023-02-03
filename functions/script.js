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

// add positive number

function addPositive(a, b) {
  a = 5;
  b = 9;
  return a + b;
}
console.log(addPositive());

function addPositive2(a, b) {
  a = 5;
  b = -9;
  return a + Math.abs(b);
}
console.log(addPositive2());

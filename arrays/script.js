//06) - arrays

console.log("01) removeItem function");

// TODO: Implement the removeItem function

//function removeItem([array], position) {}
/*const animals = ["Dog", "Cat", "Lion"];

function removeItem(animals, position) {
  for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
  }
  if (position === 1) {
    animals.splice(0, 1);
    console.log(animals);
  } else if (position === 2) {
    animals.splice(1, 1);
    console.log(animals);
  } else if (position === 3) {
    animals.splice(2, 2);
    console.log(animals);
  } else if ((position === 4)) {
    animals.splice(3, 3);
    console.log(animals);
  } else if ((position === 5)) {
    animals.splice(4, 4);
    console.log(animals);
  } else if ((position === 6)) {
    animals.splice(5, 5);
    console.log(animals);
  }
}
*/
// Arrays
const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

//function

function removeItem(array, position) {
  const arrayCopy = array.slice();
  arrayCopy.splice(position - 1, 1); //Remove 1 item, start position index corrected with "num - 1".
  //animal start index = 0; fruits start index = 2
  return arrayCopy;
}

console.log(removeItem(animals, 1)); // result should be: ["Cat", "Lion"]
console.log(animals); //const animals = ["Dog", "Cat", "Lion"];

console.log(removeItem(fruits, 3)); // result should be still: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
console.log(fruits); // result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//-------------------------------------------------------------------------------------

// 03) sumOfCharacters function

function sumOfCharacters(arr) {
  let countOfChars = 0; // create variable for counting
  for (let index = 0; index < arr.length; index++) {
    const word = arr[index];

    if (typeof word === "string") {
      countOfChars += word.length;
    }
  }
  return countOfChars;
}

// TODO: Implement the sumOfCharacters function
const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];

console.log("03) sumOfCharacters function");
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

console.log("Moin");

//06) - using loops
//01) oddNumbers function
console.log("01) oddNumbers function");
/*
function oddNumbers(numFirst, numSecond) {
  let saveNumb = ""; //leere Variable declaiert die ein string ist

  if (numFirst < 0) {
    console.log("nur ausgeführt wenn negativ");
  } else {
    for (let index = numFirst; index <= numSecond; index++) {
      //console.log("myNumber: " + index + " der modolo : " + (index % 2)); // % unterscheidet in gerade und ungerade
      if (index % 2 === 1) {
        // oddNumber
        if (saveNumb === "") {
          saveNumb = index;
        } else {
          saveNumb = saveNumb + "," + index;
        }
        //saveNumb = saveNumb + "," + index;
        //console.log("das ist 1, weil 1 ist truthy");
      } else {
        //evenNumber or something else
        //console.log("das ist null, weil 0 ist falsy");
      }
    } // concantion, verbindet string mit number um console lesbarer zu machen
  }
  return saveNumb;
}
// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log(oddNumbers(-5, 40));
*/
//--------------------------------------------------------------------------------------------//

//02) charCount function

function charCount(word, letter) {
  if (charCount.lenght > 1) {
    return "zuviel Buchstaben";
  }
  let count = 0;
  word = word.toLowerCase();
  letter = letter.toLowerCase();
  for (let index = 0; index < word.length; index++) {
    if (letter === word[index]) {
      count++;
    }
  }
  return count;
}
/*
function charCount(word, letter) {
  let count = word.split(letter).length - 1;

  console.log(count);
}*/

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

console.log(charCount("Hokuspokus", "o"));
console.log(charCount("Simsalabim", "ef"));
console.log(charCount("hAlunke", "a"));

/*     findet die porition des chars


function saveChar(word, letter) {
  //let wor = word;
  let count = word.match("l") || word.length;

  console.log(count);
}

console.log(saveChar("hello", "l"));
*/

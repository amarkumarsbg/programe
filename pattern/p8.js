const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    //add space
    for (let j = 0; j < i; j++) {
      row = row + " ";
    }

    //add star
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      row = row + "*";
    }

    //add space
    for (let j = 0; j < i; j++) {
      row = row + " ";
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n:"));
print(n);

// *********
//  *******
//   *****
//    ***
//     *

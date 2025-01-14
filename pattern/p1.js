const prompt = require("prompt-sync")();

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n:"));
pattern(n);

//*****
// *****
// *****
// *****
// ****

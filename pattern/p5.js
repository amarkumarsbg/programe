const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n - i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// *****
// ****
// ***
// **
// *

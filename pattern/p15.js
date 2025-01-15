const prompt = require("prompt-sync")();

function print(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    let char = 65;
    for (let j = 1; j <= i; j++) {
      row = row + String.fromCharCode(char) + " ";
      char++;
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// A B C D E
// A B C D
// A B C
// A B
// A

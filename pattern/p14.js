const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let char = 65; //ASCII Value  A = 65, a = 97
    for (let j = 1; j <= i; j++) {
      row = row + String.fromCharCode(char) + " ";
      char++;
    }
    console.log(row.trim());
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// A
// A B
// A B C
// A B C D
// A B C D E

// a
// a b
// a b c
// a b c d
// a b c d e

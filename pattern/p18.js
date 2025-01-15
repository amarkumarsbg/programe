const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let char = 65 + n - i;

    for (let j = 1; j <= i; j++) {
      row = row + String.fromCharCode(char) + " ";
      char++;
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// E
// D E
// C D E
// B C D E
// A B C D E

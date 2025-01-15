const prompt = require("prompt-sync")();

function print(n) {
  let char = 65;
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + String.fromCharCode(char) + " ";
    }
    console.log(row);
    char++;
  }
}

let n = parseInt(prompt("Enter n : "));
print(n);

// A
// B B
// C C C
// D D D D
// E E E E E

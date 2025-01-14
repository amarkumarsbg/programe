const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n:"));
print(n);

// 1
// 12
// 123
// 1234
// 12345

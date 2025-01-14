const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i + 1; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// 12345
// 1234
// 123
// 12
// 1

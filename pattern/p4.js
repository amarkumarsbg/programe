const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row = row + i;
    }
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// 1
// 22
// 333
// 4444
// 55555

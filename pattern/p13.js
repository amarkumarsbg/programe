const prompt = require("prompt-sync")();

function print(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + num + " ";
      num++;
    }
    console.log(row);
  }
}
let n = parseInt(prompt("Enter n: "));
print(n);

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

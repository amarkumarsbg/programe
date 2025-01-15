const prompt = require("prompt-sync")();

function printPattern(n) {
  const size = 2 * n - 1;

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      // Determine the value based on the distance from the edge
      const value = n - Math.min(i, j, size - i - 1, size - j - 1);
      row += value + " ";
    }
    console.log(row.trim());
  }
}

let n = parseInt(prompt("Enter n: "));
printPattern(n);

// Enter n: 4
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

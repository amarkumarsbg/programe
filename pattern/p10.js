const prompt = require("prompt-sync")();

function print(n) {
  // First part: Increasing stars
  for (let i = 1; i <= n; i++) {
    let row = "*".repeat(i);
    console.log(row);
  }

  // Second part: Decreasing stars
  for (let i = n - 1; i >= 1; i--) {
    let row = "*".repeat(i);
    console.log(row);
  }
}

let n = parseInt(prompt("Enter n:"));
print(n);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

const prompt = require("prompt-sync")();

function print(n) {
  // Loop for each row
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Loop to build the row with alternating 1s and 0s
    for (let j = 1; j <= i; j++) {
      row = row + (j % 2) === 1 ? "1" : "0"; // If odd index, add 1; if even, add 0
    }

    console.log(row); // Print the row
  }
}

let n = parseInt(prompt("Enter n:"));
print(n);

// 1
// 10
// 101
// 1010
// 10101

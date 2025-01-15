const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // First and last row: all stars
    if (i === 1 || i === n) {
      for (let j = 1; j <= n; j++) {
        row += "*";
      }
    } else {
      // Middle rows: stars at the boundaries, spaces in between
      row += "*"; // First star
      for (let j = 2; j < n; j++) {
        row += " ";
      }
      row += "*"; // Last star
    }

    console.log(row);
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// *****
// *   *
// *   *
// *   *
// *****

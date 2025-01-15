const prompt = require("prompt-sync")();

function print(n) {
  // Top Half
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Left stars
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }

    // Middle spaces
    for (let j = 1; j <= 2 * (i - 1); j++) {
      row += " ";
    }

    // Right stars
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }

    console.log(row);
  }

  // Bottom Half
  for (let i = n; i >= 1; i--) {
    let row = "";

    // Left stars
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }

    // Middle spaces
    for (let j = 1; j <= 2 * (i - 1); j++) {
      row += " ";
    }

    // Right stars
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }

    console.log(row);
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

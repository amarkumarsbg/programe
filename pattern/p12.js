const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let left = "";
    let right = "";
    let spaces = ""; // Initialize an empty string to hold spaces.

    // Build the left part (increasing numbers)
    for (let j = 1; j <= i; j++) {
      left += j; // Add increasing numbers
    }

    // Build the right part (decreasing numbers)
    for (let j = i; j >= 1; j--) {
      right += j; // Add decreasing numbers
    }

    // Manually add spaces
    for (let s = 1; s <= 2 * (n - i); s++) {
      spaces += " "; // Add spaces manually
    }

    // Print the row with spaces in between
    console.log(left + spaces + right);
  }
}

let n = parseInt(prompt("Enter n:"));
print(n);

// 1    1
// 12  21
// 123321

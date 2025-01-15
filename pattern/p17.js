const prompt = require("prompt-sync")();

function print(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let char = 65; // ASCII value for 'A'

    // Generate the increasing part of the pattern
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(char);
      char++;
    }

    // Generate the decreasing part of the pattern
    char -= 2; // Go back to the last character before the increment
    for (let j = 1; j < i; j++) {
      row += String.fromCharCode(char);
      char--;
    }

    // Manually add spaces for center alignment
    let spaces = "";
    for (let j = 1; j <= n - i; j++) {
      spaces += " "; // Add one space for each needed
    }

    console.log(spaces + row); // Print the row with spaces
  }
}

let n = parseInt(prompt("Enter n: "));
print(n);

//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA

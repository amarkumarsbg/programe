// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("amar"));

//for loop

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseString("Interview"));

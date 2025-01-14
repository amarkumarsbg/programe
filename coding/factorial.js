function factorial(num) {
  if (num === 0) {
    return 1;
  }

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

console.log(factorial(5));

//recursive method

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1); // Recursive case
// }

// console.log(factorial(5)); // Output: 120

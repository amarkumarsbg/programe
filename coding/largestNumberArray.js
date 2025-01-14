//find largest number in an array

// function largestNumber(arr) {
//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(largestNumber([2, 4, 6, 7, 8, 9, 15]));

function largestNumber(arr) {
  let largest = arr[0];

  return Math.max(...arr);
}

console.log(largestNumber([2, 4, 6, 7, 8, 9, 15]));

// function findLongestWord(sentence) {
//   const words = sentence.split(" ");

//   let longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("I love javascript"));

function findLongestWord(sentence) {
  return sentence.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : "longest";
  });
}

console.log(findLongestWord("I love javascript"));

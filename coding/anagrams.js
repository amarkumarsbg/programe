// Listen → Silent
// Race → Care
// Dormitory → Dirty room
// Elbow → Below

// function areAnagram(str1, str2) {
//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// }

//If you want to handle anagrams in a case-insensitive manner, you could update your function like this:
//console.log(areAnagram("Dormitory", "Dirtyroom"));

function areAnagram(str1, str2) {
  const formatString = (str) => str.toLowerCase().split("").sort().join(""); // Convert both to lowercase

  return formatString(str1) === formatString(str2);
}

console.log(areAnagram("silent", "listen")); // true

function count(str) {
  return str.split("").reduce((charCount, char) => {
    charCount[char] = (charCount[char] || 0) + 1;
    return charCount;
  }, {});
}

const str = "hello world";

console.log(count(str));

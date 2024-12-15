function removeWhiteSpace(str) {
  const result = str.replace(/\s/g, "");

  return result;
}

console.log(removeWhiteSpace("hello my name is amar"));

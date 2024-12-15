//a3b63?4z -->aaabbbbbb3????z

function transform(input) {
  let result = "";
  let i = 0;

  while (i < input.length) {
    let char = input[i];
    let nextChar = input[i + 1];

    if (nextChar && !isNaN(nextChar)) {
      let repeatCount = parseInt(nextChar, 10);

      result += char.repeat(repeatCount);
      i += 2;
    } else {
      result += char;
      i++;
    }
  }
  return result;
}

console.log(transform("a3b63?4z"));

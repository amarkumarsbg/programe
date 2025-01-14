//Reverse a number without using string

function reverse(num) {
  let reversed = 0;

  while (num !== 0) {
    const digit = num % 10;

    reversed = reversed * 10 + digit;

    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverse(123456789));

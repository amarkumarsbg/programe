function removeDuplicate(arr) {
  const uniqueElement = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElement.indexOf(arr[i]) === -1) {
      uniqueElement.push(arr[i]);
    }
  }

  return uniqueElement;
}

console.log(removeDuplicate([1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6]));

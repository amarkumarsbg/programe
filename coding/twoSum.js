function twoSum(num, target) {
  const map = new Map();

  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(num[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

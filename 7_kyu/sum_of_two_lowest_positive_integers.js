function sumTwoSmallestNumbers(numbers) {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min1) {
      min1 = numbers[i];
      min2 = min1;
    } else if (numbers[i] < min2) {
      min2 = numbers[i];
    }
  }

  return min1 + min2;
}

console.log(sumTwoSmallestNumbers([5, 5, 12, 19, 22]));

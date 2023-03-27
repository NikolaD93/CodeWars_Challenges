const removeSmallest = (numbers) => {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

return numbers.filter((num, idx) => idx !== numbers.indexOf(min));
};

console.log(removeSmallest([2, 2, 1, 2, 1]));

const sumNoDuplicates = (numList) => {
  let counts = {};

  for (let i = 0; i < numList.length; i++) {
    let num = numList[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let sum = 0;
  for (let num in counts) {
    if (counts[num] === 1) {
      sum += Number(num);
    }
  }

  return sum;
};

// console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]))

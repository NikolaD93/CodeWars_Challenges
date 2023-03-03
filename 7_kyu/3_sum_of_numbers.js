const getSum = (a, b) => {
  let resultA = 0;
  let resultB = 0;

  if (a > b) {
    for (let i = b; i <= a; i++) {
      resultA += i;
    }
    return resultA;
  } else {
    for (let i = a; i <= b; i++) {
      resultB += i;
    }
  }
  return resultB;
};

console.log(getSum(342, 342));

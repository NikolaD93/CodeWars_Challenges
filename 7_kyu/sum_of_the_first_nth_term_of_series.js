// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

const SeriesSum = (n) => {
  let s = 0;

  for (let i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
};

// console.log(SeriesSum(3))

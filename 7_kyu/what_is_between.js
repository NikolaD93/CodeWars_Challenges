// a = 1
// b = 4
// --> [1, 2, 3, 4]

const between = (a, b) => {
  let result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
};

// console.log(between(-2,2))

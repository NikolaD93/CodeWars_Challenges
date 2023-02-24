const solve = (arr) => {
  return arr.filter((num, id) => arr.lastIndexOf(num) === id);
};

// console.log(solve([3,4,4,3,6,3]))

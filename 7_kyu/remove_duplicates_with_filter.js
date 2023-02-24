const unique = (arr) => {
  return arr.filter((num, id) => arr.indexOf(num) === id);
};

// console.log(unique([1,2,2,3]))

// input ["a", "b", "c"]
// output ["1: a", "2: b", "3: c"]

const number = (array) => {
  let sth = array.map((num, idx) => `${idx + 1}: ${num}`);
  return sth;
};
// console.log(number(["a", "b", "c"]));

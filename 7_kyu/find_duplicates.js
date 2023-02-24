// TODO not finished! - The elements of the returned array should appear in the order when they first appeared as duplicates
const findDuplicates = (duplicates) => {
  let nbrs = [];

  for (let i = 0; i < duplicates.length; i++) {
    if (typeof duplicates[i] !== "string") {
      nbrs.push(duplicates[i]);
    }
  }

  let count = {};
  let dupl = [];

  for (let i = 0; i < nbrs.length; i++) {
    let num = nbrs[i];
    count[num] = count[num] ? count[num] + 1 : 1;
  }

  for (let num in count) {
    if (count[num] > 1) {
      dupl.push(Number(num));
    }
  }

  return dupl;
};

// console.log(findDuplicates([1,2,4,4,3,3,1,5,'5']))

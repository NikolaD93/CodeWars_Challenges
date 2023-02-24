const distinct = (a) => {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    if (!res.includes(a[i])) {
      res.push(a[i]);
    }
  }
  return res;
};

// console.log(distinct([1, 1, 2]));

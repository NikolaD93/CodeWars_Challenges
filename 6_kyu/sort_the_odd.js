const sortArray = (arr) => {
  let oddsSorted = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) oddsSorted.push(arr[i]);
  }

  oddsSorted = oddsSorted.sort((a,b) => a - b);

  return arr.map(el => el % 2 ? oddsSorted.shift() : el);

};

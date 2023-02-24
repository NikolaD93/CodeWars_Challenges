// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] -->
// ["Keep", "Keep", "Keep", ...]

const removeEveryOther = (arr) => {
  let newData = [];

  for (let i = 0; i < arr.length; i += 2) {
    newData.push(arr[i]);
  }

  return newData;
};

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

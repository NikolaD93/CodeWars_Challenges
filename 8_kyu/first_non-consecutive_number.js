const nonConsecutive = (arr) => {
  let num = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      num = arr[i + 1];
      return num;
    }
  }
};

// console.log(nonConsecutive([1,2,3,4,6,7,8]));

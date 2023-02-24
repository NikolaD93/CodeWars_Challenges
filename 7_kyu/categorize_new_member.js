// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = (data) => {
  return (newData = data.map((item) =>
    item[0] >= 55 && item[1] > 7 ? "Senior" : "Open"
  ));
};

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

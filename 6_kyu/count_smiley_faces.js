const countSmileys = (arr) => {
  const chars = [
    ":)",
    ":D",
    ":-)",
    ":-D",
    ":~)",
    ":~D",
    ";)",
    ";D",
    ";-)",
    ";-D",
    ";~)",
    ";~D",
  ];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      if (arr[i] == chars[j]) {
        count++;
      }
    }
  }

  return count;
};

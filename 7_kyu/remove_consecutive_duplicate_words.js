const removeConsecutiveDuplicates = (s) => {
  s = s.split(" ");
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      result.push(s[i]);
    }
  }

  return result.join(" ");
};

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);

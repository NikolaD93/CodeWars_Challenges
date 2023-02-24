const reverseWords = (str) => {
  let reverse = [];
  let words = str.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);
  }
  return reverse.join(" ");
};

// console.log(reverseWords('Hello world'))

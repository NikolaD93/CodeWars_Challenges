const removeDuplicateWords = (s) => {
  let wordsArray = s.split(" ");
  return wordsArray
    .filter((word, index) => wordsArray.indexOf(word) === index)
    .join(" ");
};

// console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))

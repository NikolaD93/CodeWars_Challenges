const solution = (string) => {
  let words = string.split("");
  let newStr = "";

  words.forEach((word) => {
    if (word === word.toUpperCase()) {
      newStr += " " + word;
    } else {
      newStr += word;
    }
  });

  return newStr;

  //? Done with Regex
  // return(string.replace(/([A-Z])/g, ' $1'));
};

// console.log(solution("camelCasingTestCase"));

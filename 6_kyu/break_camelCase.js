const solution = (string) => {
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newStr += " " + string[i];
    } else {
      newStr += string[i];
    }
  }

  return newStr;

  //? Done with Regex
  // return(string.replace(/([A-Z])/g, ' $1'));
};

// console.log(solution("camelCasingTestCase"));

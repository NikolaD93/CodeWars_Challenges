const pigIt = (str) => {
  let result = str.split(" ").map((word) => {
    if (word === "!" || word === "?" || word === ".") {
        return word;
    } else {
        return word.substring(1) + word[0] + "ay";
    }
  });

  return result.join(" ");
};


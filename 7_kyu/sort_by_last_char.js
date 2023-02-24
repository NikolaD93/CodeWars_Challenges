const last = (str) => {
  return str
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

// console.log(last('what time are we climbing up the volcano'))

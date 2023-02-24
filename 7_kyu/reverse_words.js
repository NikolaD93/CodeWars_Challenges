const revWords = (str) => {
    let revStr = str.split("").reverse().join("");
    let array = [];
    let revStrArr = revStr.split(" ");
    for (let i = revStrArr.length - 1; i >= 0; i--) {
      array.push(revStrArr[i]);
    }
    return array.join(" ");
  };
 
  // console.log(revWords("double  spaced  words"))
//? MY SOLUTION
// const printerError = (s) => {
//   let couter = 0;
//   for (let i = 0; i < s.length; i++) {
//     if(s[i] === "n" || s[i] === "o" || s[i] === "p" || s[i] === "q" || s[i] === "r" || s[i] === "s" || s[i] === "t" || s[i] === "u" || s[i] === "v" || s[i] === "w" || s[i] === "x" || s[i] === "y" || s[i] === "z") {
//       couter++
//     }
//   }
//   return `'${couter}/${s.length}'`
// }

//? BETTER SOLUTION
const printerError = (s) => {
  let couter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      couter++;
    }
  }
  return `'${couter}/${s.length}'`;
};

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

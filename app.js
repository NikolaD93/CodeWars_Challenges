//! TESTING 1 2 3

// input ["a", "b", "c"]
// output ["1: a", "2: b", "3: c"]

const number = (array) => {
  let sth = array.map((num, idx) => `${idx + 1}: ${num}`);
  return sth;
};
// console.log(number(["a", "b", "c"]));

//! Categorize New Member

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = (data) => {
  return (newData = data.map((item) =>
    item[0] >= 55 && item[1] > 7 ? "Senior" : "Open"
  ));
};

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

//! Sum of the first nth term of Series

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

const SeriesSum = (n) => {
  let s = 0;

  for (let i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
};

// console.log(SeriesSum(3))

//! What is between?

// a = 1
// b = 4
// --> [1, 2, 3, 4]

const between = (a, b) => {
  let result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
};

// console.log(between(-2,2))

//! Printer Errors

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

//! Removing Elements

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] -->
// ["Keep", "Keep", "Keep", ...]

const removeEveryOther = (arr) => {
  let newData = [];

  for (let i = 0; i < arr.length; i += 2) {
    newData.push(arr[i]);
  }

  return newData;
};

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//! Find the stray number

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  //take first element
  let strayChar = numbers[0];

  // see if it is different from the next 2
  if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar;

  // if not find the first value that is different
  for (let i = 1; i < numbers.length; i++) {
    if (strayChar !== numbers[i]) return numbers[i];
  }
}

// console.log(stray([1,2,1]));

// ! Twice as old

// (42,21) => 0
// (22,1) => 20
// (29,0) => 29

const twiceAsOld = (d, s) => {
  if (d / s === 0) return;

  let past = d - s * 2;
  past = Math.abs(past);
  return past;
};

// console.log(twiceAsOld(29,0));

//! Non Consecutive

const nonConsecutive = (arr) => {
  let num = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      num = arr[i + 1];
      return num;
    }
  }
};

// console.log(nonConsecutive([1,2,3,4,6,7,8]));

//! Find the middle element

const gimme = (triplet) => {
  const newNiz = [...triplet];
  triplet.sort((a, b) => a - b);
  return newNiz.indexOf(triplet[1]);
};

// console.log(gimme([2,3,1]))

//! Is this a triangle

const isTriangle = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return true;
};

// console.log(isTriangle(1,2,2))

//! Basic Mathematical Operations

const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      break;
  }
};

// console.log(basicOp('-', 15 ,18))

//! Number of People in the Bus

const numberOfPeople = (busStops) => {
  let peopleLeft = 0;

  for (let i = 0; i < busStops.length; i++) {
    peopleLeft += busStops[i][0] - busStops[i][1];
  }

  return peopleLeft;
};

// console.log(numberOfPeople([[10,0],[3,5],[5,8]])

//! Delete occurrences of an element if it occurs more than n times

// [1,2,3,1,2,1,2,3] , 2
// [1,2,3,1,2,3]
// [20,37,20,21] , 1 => [20,37,21]

const deleteNth = (arr, n) => {};

let arr = [1, 2, 3, 1, 4, 2, 3, 2, 1];
let uniqueChars = [...new Set(arr)];

// console.log(uniqueChars);

//! Remove anchor from URL

const removeUrlAnchor = (url) => {
  if (!url.includes("#")) return url;
  return url.slice(0, url.indexOf("#"));
};

// console.log(removeUrlAnchor("www.codewars.com/katas/#about"))

//! Sentence Smash

const smash = (words) => {
  return words.join(" ");
};

//! Sort by Last Char

const last = (str) => {
  return str
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

// console.log(last('what time are we climbing up the volcano'))

//! Regex Password Validation

const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;

//! Reversing Words in a String

const reverseWords = (str) => {
  let reverse = [];
  let words = str.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);
  }
  return reverse.join(" ");
};
//? This is how to reverse words in a String
// console.log(reverseWords('Hello world'))

//! Reverse words

const revWords = (str) => {
  let revStr = str.split("").reverse().join("");
  let array = [];
  let revStrArr = revStr.split(" ");
  for (let i = revStrArr.length - 1; i >= 0; i--) {
    array.push(revStrArr[i]);
  }
  return array.join(" ");
};
//? This is how to reverse letters in a word of a string
// console.log(revWords("double  spaced  words"))

//! Break camelCase

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

//! Sum a list but ignore any duplicates

const sumNoDuplicates = (numList) => {
  let counts = {};

  for (let i = 0; i < numList.length; i++) {
    let num = numList[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let sum = 0;
  for (let num in counts) {
    if (counts[num] === 1) {
      sum += Number(num);
    }
  }

  return sum;
};

// console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]))

//! Remove duplicates from list

const distinct = (a) => {
  // let seen = {};
  // let result = [];
  // for (let i = 0; i < a.length; i++) {
  //   let current = a[i];
  //   if (!seen[current]) {
  //     seen[current] = true;
  //     result.push(current);
  //   }
  // }
  // return result;
  let res = [];

  for (let i = 0; i < a.length; i++) {
    if (!res.includes(a[i])) {
      res.push(a[i]);
    }
  }
  return res;
};

// console.log(distinct([1, 1, 2]));

//! Find Duplicates

// TODO not finished! - The elements of the returned array should appear in the order when they first appeared as duplicates 
const findDuplicates = (duplicates) => {
  let nbrs = [];

  for (let i = 0; i < duplicates.length; i++) {
    if (typeof duplicates[i] !== "string") {
      nbrs.push(duplicates[i]);
    }
  }

  let count = {};
  let dupl = [];

  for (let i = 0; i < nbrs.length; i++) {
    let num = nbrs[i];
    count[num] = count[num] ? count[num] + 1 : 1;
  }

  for (let num in count) {
    if (count[num] > 1) {
      dupl.push(Number(num));
    }
  }

  return dupl;
};

// console.log(findDuplicates([1,2,4,4,3,3,1,5,'5']))

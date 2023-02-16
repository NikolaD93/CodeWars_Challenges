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
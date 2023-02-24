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

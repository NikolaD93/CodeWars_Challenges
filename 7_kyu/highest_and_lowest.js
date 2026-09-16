function highAndLow(numbers) {
  const numbersArray = numbers.split(' ').map(Number)

  let max = numbersArray[0]
  let min = numbersArray[0]

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > max) {
      max = numbersArray[i]
    }
    if (numbersArray[i] < min) {
      min = numbersArray[i]
    }
  }

  return `${max} ${min}`
}

const nbDig = (n, d) => {
  let counter = 0;

  for (let i = 0; i <= n; i++) {
    let multiply = i ** 2;
    multiply = String(multiply).split("");
    for (let k = 0; k < multiply.length; k++) {
      if(Number(multiply[k]) === d) counter++;
    }
  }

  return counter;
};



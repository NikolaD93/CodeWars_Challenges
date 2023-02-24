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

const past = (h, m, s) => {
  return h * 3_600_000 + m * 60_000 + s * 1_000;
};

console.log(past(0, 0, 0));

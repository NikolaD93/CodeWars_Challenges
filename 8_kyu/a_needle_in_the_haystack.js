const findNeedle = (haystack) => {
  let index = 0;
  for (let i = 0; i < haystack.length; i++) {
    index = haystack.indexOf("needle");
  }

  return `found the needle at position ${index}`;
};


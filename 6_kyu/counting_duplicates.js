const duplicateCount = (text) => {
  let duplicates = {};

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    duplicates[char] = duplicates[char] ? duplicates[char] + 1 : 1;
  }

  let count = 0;

  for (const char in duplicates) {
        if(duplicates[char] > 1)
        count++;
  }

  return count;
};

console.log(duplicateCount("ABBA"));

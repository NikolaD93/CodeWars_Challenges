const uniqueSum = (lst) => {
  let unique = [];

  for (let i = 0; i < lst.length; i++) {
    if (!unique.includes(lst[i])) unique.push(lst[i]);
  }

  if (lst.length === 0) return null;

  return unique.reduce((acc, value) => acc + value);
};

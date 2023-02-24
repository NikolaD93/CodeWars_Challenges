const gimme = (triplet) => {
  const newNiz = [...triplet];
  triplet.sort((a, b) => a - b);
  return newNiz.indexOf(triplet[1]);
};

// console.log(gimme([2,3,1]))

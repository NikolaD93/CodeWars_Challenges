const numberOfPeople = (busStops) => {
  let peopleLeft = 0;

  for (let i = 0; i < busStops.length; i++) {
    peopleLeft += busStops[i][0] - busStops[i][1];
  }

  return peopleLeft;
};

// console.log(numberOfPeople([[10,0],[3,5],[5,8]])

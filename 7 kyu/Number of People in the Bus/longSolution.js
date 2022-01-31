const number = busStops => {
  let peopleBus = 0;

  // 💬 Loop each stop in busStops []
  for (let i = 0; i < busStops.length; i++) {
    // 💬 Get the information in each stop
    const stop = busStops[i];
    const peopleIn = stop[0];
    const peopleOut = stop[1];

    // 💬 Calculate based on the information above
    peopleBus += peopleIn;
    peopleBus -= peopleOut;
  }

  return peopleBus;
};

const result = number([
  [10, 0],
  [3, 5],
  [5, 8],
]);
console.log(result); // 🐣 5

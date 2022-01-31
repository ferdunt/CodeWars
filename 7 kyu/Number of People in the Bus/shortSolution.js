const number = busStops => {
  let peopleBus = busStops.reduce(
    (acc, [peopleIn, peopleOut]) => acc + peopleIn - peopleOut,
    0
  );

  return peopleBus;
};

const result = number([
  [10, 0],
  [3, 5],
  [5, 8],
]);
console.log(result); // 🐣 5

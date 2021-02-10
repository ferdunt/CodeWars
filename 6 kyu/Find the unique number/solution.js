function findUniq(arr) {
  // 💬 Create an object to store every value with its quantity
  const valuesObject = arr.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
  console.log(valuesObject);

  // 💬 Loop the object to search to one with 1 value
  for (const key in valuesObject) {
    if (valuesObject[key] === 1) return Number(key);
  }
}

const result = findUniq([0, 1, 0]);
console.log(result); // 🐣 1

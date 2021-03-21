function enough(cap, on, wait) {
  const passengers = on + wait;
  if (passengers <= cap) {
    return 0;
  } else {
    return passengers - cap;
  }
}

const result = enough(10, 5, 5);
console.log(result); // 🐣 0

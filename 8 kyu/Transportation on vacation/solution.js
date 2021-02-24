function rentalCarCost(d) {
  let total = d * 40;
  if (d >= 7) return (total -= 50);
  if (d >= 3) return (total -= 20);

  return total;
}

const result = rentalCarCost(3);
console.log(result); // 🐣 100

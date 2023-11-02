function cakes(recipe, available) {
  let numCakes;
  for (const item in recipe) {
    if (available[item]) {
      const quantityRecipe = recipe[item];
      const quantityAvailable = available[item];
      const posibleCakes = Math.floor(quantityAvailable / quantityRecipe);

      if (!numCakes || posibleCakes < numCakes) {
        numCakes = posibleCakes;
      }
      if (numCakes === 0) return 0;
    } else {
      return 0;
    }
  }
  return numCakes;
}

const result = cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
console.log(result); // 🐣 2

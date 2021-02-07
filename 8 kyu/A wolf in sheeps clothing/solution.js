function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf')
    return 'Pls go away and stop eating my sheep';

  const sheep = queue.length - (queue.indexOf('wolf') + 1);
  return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`;
}

const result = warnTheSheep(['sheep', 'wolf', 'sheep']);
console.log(result);
// 🐣 `Oi! Sheep number 1! You are about to be eaten by a wolf!`;

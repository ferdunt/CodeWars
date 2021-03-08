const friend = friends => friends.filter(f => f.length === 4);

const result = friend(['Ryan', 'Kieran', 'Mark']);
console.log(result); // 🐣 ["Ryan", "Mark"]

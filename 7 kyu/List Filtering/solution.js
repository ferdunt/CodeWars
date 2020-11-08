function filter_list(list) {
  return list.filter(item => typeof item === 'number');
}

const result = filter_list([1, 2, 'a', 'b']); // 🥚
console.log(result); // 🐣 [1,2]

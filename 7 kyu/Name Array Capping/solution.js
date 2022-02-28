const capMe = names => {
  names = names.map(n => n.toLowerCase());
  return names.map(n => n[0].toUpperCase() + n.slice(1));
};

const result = capMe(['KARLY', 'DANIEL', 'KELSEY']);
console.log(result); // 🐣 ['Karly', 'Daniel', 'Kelsey']

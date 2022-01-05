function list(names) {
  const size = names.length - 1;
  const allNames = names.reduce((acc, cur, i) => {
    if (i === size - 1) {
      acc += cur.name + ' & ';
    } else if (i === size) {
      acc += cur.name;
    } else {
      acc += cur.name + ', ';
    }
    return acc;
  }, '');
  return allNames;
}

const names = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];
const result = list(names); // 🥚
console.log(result); // 🐣 'Bart, Lisa & Maggie'

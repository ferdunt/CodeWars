function likes(names) {
  let message = '';
  const size = names.length;

  // 💬 Get the dimension of the array
  let dimension = size;

  // 💬 If there is more that 4 in the names array set dimension to 4
  if (size >= 4) dimension = 4;

  // 💬 Check 'dimension' and choose the correct message
  switch (dimension) {
    case 1:
      message = `${names[0]} likes this`;
      break;
    case 2:
      message = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case 4:
      message += `${names[0]}, ${names[1]} and ${size - 2} others like this`;
      break;
    default:
      message = 'no one likes this';
      break;
  }

  return message;
}

const result = likes(['Peter']); // 'Peter likes this'
console.log(result);
// 335

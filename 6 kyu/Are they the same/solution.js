function comp(array1, array2) {
  // 💬 Check the arrays are not falsy values
  if (!array1 || !array2) return false;

  // 💬 Loop over the array1
  for (let i = 0; i < array1.length; i++) {
    // 💬 Square the current element
    const elementSquared = array1[i] ** 2;

    // 💬 Check if does not includes the element squared
    if (!array2.includes(elementSquared)) {
      return false;
    }
    // 💬 Delete the element based on the position in array 2
    array2.splice(array2.indexOf(elementSquared), 1);
  }

  return true;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

const result = comp(a1, a2);
console.log(result); // 🐣 true

function dblLinear(n) {
  // 💬 Start our array with 1
  let u = [1];

  // 💬 Create an object to store all the numbers seen
  let myNumbers = {};

  // 💬 Loop from 0 to "n"
  for (let i = 0; i < n; i++) {
    const x = u[i];
    // 💬 Calculate "x" and "y" based on formula
    const y = 2 * x + 1;
    const z = 3 * x + 1;

    // 💬 In the case "y" check it isn't in "myNumbers"
    if (!myNumbers[y]) {
      // 💬 Insert "y" in order from < to >
      for (let i = u.length - 1; i >= 0; i--) {
        if (u[i] < y) {
          // 💬 Update and add to "myNumbers" object
          u.splice(i + 1, 0, y);
          myNumbers[y] = true;
          break;
        }
      }
    }

    // 💬 In the case "z" check it isn't in "myNumbers"
    if (!myNumbers[z]) {
      // 💬 Push and add to "myNumbers" object
      u.push(z);
      myNumbers[z] = true;
    }
  }

  return u[n];
}

const result = dblLinear(10);
console.log(result); // 🐣 22

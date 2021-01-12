function tickets(peopleInLine) {
  // 💬 Create an object to store money
  let money = {
    25: 0,
    50: 0,
    100: 0,
    total: 0,
  };

  // 💬 Loop 'peopleInLine'
  for (let i = 0; i < peopleInLine.length; i++) {
    const person = peopleInLine[i];
    let change = person - 25;

    // 💬 Check if the value is '25'
    if (person === 25) {
      money['25']++;
      money.total += 25;
      continue;
    }

    // 💬 Check if there is change and we have money
    if (money.total >= change && change) {
      // 💬 Calculation for 100
      if (person === 100) {
        if (money['25'] && money['50']) {
          money['50']--;
          money['25']--;
          money.total -= 75;
        } else if (money['25'] >= 3) {
          money['25'] -= 3;
          money.total -= 75;
        } else {
          return 'NO';
        }
      } else {
        // 💬 Calculation for 50
        if (person === 50 && money['25']) {
          money['25']--;
          money.total -= 25;
          money['50']++;
          money.total += 50;
        } else {
          return 'NO';
        }
      }
    } else {
      return 'NO';
    }
  }

  return 'YES';
}

const result = tickets([25, 25, 50]);
console.log(result); // 🐣 YES

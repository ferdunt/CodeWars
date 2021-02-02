const bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);

const result = bonusTime(10000, true);
console.log(result); // 🐣 '£100000'

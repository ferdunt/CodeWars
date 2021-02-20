function validate(password) {
  // 💬 (?=.*[a-z]) => Contains one or more "Lowercase"
  // 💬 (?=.*[A-Z]) => Contains one or more "Uppercase"
  // 💬 (?=.*\d) => Contains one or more "Number"
  // 💬 (?!.*[.;\s]) => Don't contain any special character in the group [.;\s]
  // 💬 .{6,} => At least six characters long or more
  const myRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[.;\s]).{6,}/g;
  return myRegex.test(password);
}

const result = validate('djI38D55');
console.log(result); // 🐣 true

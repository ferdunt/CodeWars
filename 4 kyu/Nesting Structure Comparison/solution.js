Array.prototype.sameStructureAs = function (other) {
  const array1 = this;
  const array2 = other;

  // 💬 Rule 1 - Check if both arrays are different
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    const a = array1[i];
    const b = array2[i];

    // 💬 Rule 2 - Check if "a" is [] && [a]-[b] are not the same
    if (Array.isArray(a) && !a.sameStructureAs(b)) {
      return false;
      // 💬 Rule 3 - Check if "a" is not [] && "b" is an []
    } else if (!Array.isArray(a) && Array.isArray(b)) {
      return false;
    }
  }

  // 💬 If any of the 3 rules passed return true
  return true;
};

console.log([1, [1, 1]].sameStructureAs([2, [2, 2]])); // true

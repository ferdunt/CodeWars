// 💬 Define a new array of numbers
const numbers = [1, 2, 3, 4, 5];

// 💬 Create a method to return all values squared
Array.prototype.square = function () {
    return this.map(number => number ** 2);
};

// 💬 Create a method to return all values cubed
Array.prototype.cube = function () {
    return this.map(number => number ** 3);
};

// 💬 Create a method to return the average of all numbers
Array.prototype.average = function () {
    return this.reduce((acc, cur) => acc + cur, 0) / this.length;
};

// 💬 Create a method to return the sum of all numbers
Array.prototype.sum = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

// 💬 Create a method to return only the even numbers
Array.prototype.even = function () {
    return this.filter(number => number % 2 === 0);
};

// 💬 Create a method to return only the odd numbers
Array.prototype.odd = function () {
    return this.filter(number => number % 2 !== 0);
};

const result = numbers.sum();
console.log(result);

# A Rule of Divisibility by 7 - 7kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

## 🥚 Input 🥚

```
1603 (Number)
```

## 🐣 Output 🐣

```
[7, 2] (Array of Numbers)
```

## 👓 Explanation 👓

```
 1# 1603
 2# "1603".length <= 2 (false)
 3# 160 - (3*2) = 154 (#1)
 4# "154".length <= 2 (false)
 5# 15 - (4*2) = 7 (#2)
 6# "7".length <= 2 (true)
 7# [7, 2] 🎉
```

## 🔗 Links 🔗

[A Rule of Divisibility by 7](https://www.codewars.com/kata/55e6f5e58f7817808e00002e)

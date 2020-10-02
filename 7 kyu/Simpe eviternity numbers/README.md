# Simple eviternity numbers - 7kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

An eviternity number is a number which:

-   Contains only digits 8, 5 and 3.
-   The count of the digit 8 >= count of digit 5 >= count of digit 3.

## 🥚 Input 🥚

```
(0,100) (Integer - Integer)
```

## 🐣 Output 🐣

```
4 (Integer)
```

## 👓 Explanation 👓

```
This example show the evaluation for the number "358"
 1# 358 => [3] => 1
 2# 358 => [5] => 1
 3# 358 => [8] => 1
 4# [8].length >= [5].length => true
 5# [5].length >= [3].length => true
 6# [5].length >= [3].length => true
 7# +1 🎉
```

## 🔗 Links 🔗

[Simple eviternity numbers](https://www.codewars.com/kata/5b93f268563417c7ed0001bd)

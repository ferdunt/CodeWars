# Palindrome chain length - 7kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

## 🥚 Input 🥚

```
87 (Number)
```

## 🐣 Output 🐣

```
4 (Number)
```

## 👓 Explanation 👓

```
 1# 87
 2# 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
 3# 165, 726, 1353, '4884'
 4# 4 🎉
```

## 🔗 Links 🔗

[Palindrome chain length](https://www.codewars.com/kata/525f039017c7cd0e1a000a26)

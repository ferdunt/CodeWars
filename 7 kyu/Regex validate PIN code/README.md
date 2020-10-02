# Regex validate PIN code - 7kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

## 🥚 Input 🥚

```
12345 (Integer)
```

## 🐣 Output 🐣

```
false (Bool)
```

## 👓 Explanation 👓

```
1# ^ => Start with
2# [0-9] => From 0 to 9
3# {n} => Digits to search n(any number)
4# \d => [0-9]
5# | => OR
6# /(^(\d{4}|\d{6})$)/ 🎉
```

## 🔗 Links 🔗

[Regex validate PIN code](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

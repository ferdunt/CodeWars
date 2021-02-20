# Regex Password Validation - 5kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 🥚 Input 🥚

```
"djI38D55" (String)
```

## 🐣 Output 🐣

```
true (Boolean)
```

## 👓 Explanation 👓

```
 1# "djI38D55"
 2# (?=.*[a-z]) => It has LowerCase
 3# (?=.*[A-Z]) => It has UpperCase
 4# (?=.*\d) => It has Numbers
 5# (?!.*[.;\s]) => It hasn't Special characters
 6# true 🎉
```

## 🔗 Links 🔗

[Regex Password Validation](https://www.codewars.com/kata/52e1476c8147a7547a000811)

# Sums of Parts- 6kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 🥚 Input 🥚

```
[0, 1, 3, 6, 10] (Array of Numbers)
```

## 🐣 Output 🐣

```
[20, 20, 19, 16, 10, 0] (Array of Numbers)
```

## 👓 Explanation 👓

```
 1# [0, 1, 3, 6, 10]
 2# [0, 0, 1, 3, 6, 10]
 3# [0 + 0 + 1 + 3 + 6 + 10] = 20
 4# [(20 - 0) + (20 - 0) + (20 - 1) + (19 - 3) + (16 - 6) + (10 - 10)] = 20
 5# [20, 20, 19, 16, 10, 0] 🎉
```

## 🔗 Links 🔗

[Sums of Parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b)

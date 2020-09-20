# CHECK THE EXAM - 8kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

## 🥚 Input 🥚

```
(["a", "a", "c", "b"], ["a", "a", "b", ""]) (Array,Array)
```

## 🐣 Output 🐣

```
 7 (Integer)
```

## 👓 Explanation 👓

```
 1# "a" === "a" => + 4
 2# "a" === "a" => + 4
 3# "c" !== "b" => - 1
 4# "b" !== "" => + 0
 5# 7 🎉
```

## 🔗 Links 🔗

[Check the exam](https://www.codewars.com/kata/5a3dd29055519e23ec000074)

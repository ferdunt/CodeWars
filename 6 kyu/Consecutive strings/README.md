# Consecutive strings - 6kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 🥚 Input 🥚

```
(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2) (Array of Strings, Number)
```

## 🐣 Output 🐣

```
"folingtrashy" (String)
```

## 👓 Explanation 👓

```
 1# (['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
 2# ['tree', 'foling'], ['foling','trashy'],['trashy','blue'] ,['blue','abcdef'] ,['abcdef','uvwxyz']
 3# ["treefoling", "folingtrashy", "trashyblue", "blueabcdef","abcdefuvwxyz" ]
 4# [10, 12, 10, 10, 12]
 5# "folingtrashy" 🎉
```

## 🔗 Links 🔗

[Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)

# Take a Ten Minute Walk - 6kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

## 🥚 Input 🥚

```
['n','n','n','s','n','s','n','s','n','s'] (Array of Strings)
```

## 🐣 Output 🐣

```
false (Boolean)
```

## 👓 Explanation 👓

```
 1# ['n','n','n','s','n','s','n','s','n','s']
 2# {n:6, s:4, w:0, e:0}
 3# 6 - 4 === 0 (Verify the steps to 'n' - 's')
 4# false 🎉
```

## 🔗 Links 🔗

[Take a Ten Minute Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

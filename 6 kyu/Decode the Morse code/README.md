# Decode the Morse code - 6kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

## 🥚 Input 🥚

```
".... . -.--   .--- ..- -.. ." (String)
```

## 🐣 Output 🐣

```
"HEY JUDE" (String)
```

## 👓 Explanation 👓

```
 1# ".... . -.--   .--- ..- -.. ."
 2# [....,.,-.--, ,.---,..-,-..,.]
 3# [H,E,Y, , J,U,D,E]
 4# "HEY JUDE" 🎉
```

## 🔗 Links 🔗

[Decode the Morse code](https://www.codewars.com/kata/54b724efac3d5402db00065e)

# Title Case - 6kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

## 🥚 Input 🥚

```
("THE WIND IN THE WILLOWS", "The In") (String - String)
```

## 🐣 Output 🐣

```
'The Wind in the Willows' (String)
```

## 👓 Explanation 👓

```
 1# "THE WIND IN THE WILLOWS"
 2# "the wind in the willows"
 3# Except ("in" and "the")
 4# "The Wind in the Willows" 🎉
```

## 🔗 Links 🔗

[Title Case](https://www.codewars.com/kata/5202ef17a402dd033c000009)

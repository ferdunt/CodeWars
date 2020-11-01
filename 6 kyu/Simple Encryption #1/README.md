# Simple Encryption #1 - 6kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.

## 🥚 Input 🥚

```
("This is a test!",1) (String, Number) - ENCRYPT
("hsi  etTi sats!",1) (String) - DECRYPT
```

## 🐣 Output 🐣

```
"hsi  etTi sats!" (String) - ENCRYPT
"This is a test!" (String) - DECRYPT
```

## 👓 Explanation 👓

```
ENCRYPT
 1# "This is a test!"
 2# "=h=s=i= = =e=t="
 3# "T=i= =s=a=t=s=!"
 4# "hsi  etTi sats!" 🎉
```

## 🔗 Links 🔗

[Simple Encryption #1](https://www.codewars.com/kata/57814d79a56c88e3e0000786)

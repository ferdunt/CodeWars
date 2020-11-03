# Fat Fingers - 6kyu

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

Given a string that Freddy wants to type, emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock, and return the string that Freddy actually types. It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled, capitalization is reversed, but punctuation is not affected.

## 🥚 Input 🥚

```
"AaVakA" (String)
```

## 🐣 Output 🐣

```
"VK" (String)
```

## 👓 Explanation 👓

```
 * CapsLock = false, result = []
 1# "AaVkA"
 2# ['A','a','V','a','k','A']
 3# ['A']
 * CapsLock = true, result = []
 4# ['a']
 * CapsLock = false, result = []
 5# ['V']
 * CapsLock = false, result = ['V']
 6# ['a']
 * CapsLock = true, result = ['V']
 7# ['k']
 8# ['k'] === ['K'] => ['K']
 * CapsLock = true, result = ['V','K']
 9# ['A']
 * CapsLock = false, result = ['V','K']
 10# ['V','K']
 11# 'VK' 🎉
```

## 🔗 Links 🔗

[Fat Fingers](https://www.codewars.com/kata/5aa99584fd5777ee9a0001f1)

# Higher or Lower

> A guessing game!

## Install

```console
$ npm install higher-or-lower
```

## Syntax

```js
guess(myGuess, number);
```

```js
const guess = require('higher-or-lower');

console.log(guess(1, 2));

// Higher!!!

console.log(guess(2, 1));

// Lower!!!

console.log(guess(1, 1));

// You guessed it!
```

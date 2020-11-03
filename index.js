function guess(myGuess, number) {
  if (myGuess < number) {
    return 'Higher!!!';
  } else if (myGuess > number) {
    return 'Lower!!!';
  } else {
    return 'You guessed it!';
  }
}

const testHigher = guess(2, 10);
const testLower = guess(10, 2);
const testGuess = guess(10, 10);

console.log(testHigher, testLower, testGuess);

module.exports = {
  guess: guess,
};

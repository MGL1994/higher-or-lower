function guess(myGuess, number) {
  if (myGuess < number) {
    return 'Higher!!!';
  } else if (myGuess > number) {
    return 'Lower!!!';
  } else {
    return 'You guessed it!';
  }
}

module.exports = {
  guess: guess,
};

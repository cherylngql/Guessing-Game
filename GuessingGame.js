function generateWinningNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function shuffle(arr) {
  var m = arr.length;
  while (m) {
    var i = Math.floor(Math.random() * m);
    m--;
    var lastUnshuffled = arr[m];
    arr[m] = arr[i];
    arr[i] = lastUnshuffled;
  }
  return arr;
}

function Game() {
  this.playersGuess = null;
  this.pastGuesses = [];
  this.winningNumber = generateWinningNumber();
}

Game.prototype.difference = function() {
  return Math.abs(this.playersGuess - this.winningNumber);
};

Game.prototype.isLower = function() {
  return this.playersGuess < this.winningNumber
};

Game.prototype.checkGuessDifference = function() {
  var diff = this.difference();
  if (this.pastGuesses.length > 4) {
    return 'You\'ve already lost. Please reset the game!';
  } else if (diff === 0) {
    return 'You Win!';
  } else if (this.pastGuesses.indexOf(this.playersGuess) > -1) {
    return 'You have already guessed that number.';
  } else if (this.pastGuesses.length === 4) {
    return 'You Lose.';
  } else if (diff < 10) {
    return 'You\'re burning up!';
  } else if (diff < 25) {
    return 'You\'re lukewarm.';
  } else if (diff < 50) {
    return 'You\'re a bit chilly.';
  } else {
    return 'You\'re ice cold!';
  }
};

Game.prototype.compareGuess = function() {
  if (this.isLower()) {
    return 'Guess higher!'
  } else {
    return 'Guess lower!'
  }
}

Game.prototype.playersGuessSubmission = function(guess) {
  if (isNaN(guess) || guess > 100 || guess < 1) {
    throw 'That is an invalid guess.';
  }
  this.playersGuess = guess;
  var msg = this.checkGuessDifference();
  if (this.pastGuesses.indexOf(this.playersGuess) === -1 && this.playersGuess !== this.winningNumber) {
    this.pastGuesses.push(this.playersGuess);
  }
  return msg
};

Game.prototype.provideHint = function() {
  return shuffle([generateWinningNumber(), generateWinningNumber(), this.winningNumber]);
};

function newGame() {
  return new Game();
}

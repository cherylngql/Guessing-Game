function submitGuess(game) {
  var input = Number($('#player-input').val());
  $('#player-input').val('');
  var titleMsg = game.playersGuessSubmission(input);
  $('h1').text(titleMsg);
  if (titleMsg !== 'You have already guessed that number.' && titleMsg !== 'You Win!') {
    var firstEmptyBox = $('li:empty:first');
    firstEmptyBox.text(game.playersGuess);
  }
  if (titleMsg === 'You Lose.' || titleMsg === 'You\'ve already lost. Please reset the game!' || titleMsg === 'You Win!') {
    $('h3').text('Click the reset button to play again!');
    $('#hint').hide();
    $('#answer').show();
  } else {
    $('h3').text(game.compareGuess());
  }
}

$('document').ready(function() {
  var game = newGame();
  $('#submit').on('click', function() {
    submitGuess(game);
  });
  $('#player-input').on('keypress', function(event) {
    if (event.which === 13) {
      submitGuess(game);
    }
  });
  $('#reset').on('click', function() {
    game = newGame();
    $('h1').text('Play the Guessing Game!');
    $('h3').text('Guess a number between 1 - 100!')
    $('.guess').text('');
    $('#hint, #submit').prop("disabled", false);
  });
  $('#hint').on('click', function() {
    var hint = game.provideHint();
    $('h1').text('The winning Number is ' + hint[0] + ', ' + hint[1] + ', or ' + hint[2] + '!');
    $('#hint').prop('disabled', true);
  })
  $('#answer').on('click', function() {
    $('h1').text('The answer is ' + game.winningNumber + '!');
  })
});

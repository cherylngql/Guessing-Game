var submitBtn = document.getElementById('submit');
var answer = (Math.floor(Math.random() * 100) + 1).toString();
var message = document.getElementById('alert');
var resetBtn = document.getElementById('reset');
var hintBtn = document.getElementById('hint');
var input = document.getElementById('player-input');

submitBtn.addEventListener('click', function() {
  if (isNaN(input.value)) {
    message.innerHTML = 'Please guess a number!';
  } else if (input.value === answer) {
    message.innerHTML = 'Congratulation! You guessed it right!';
  } else {
    console.log(input.value, answer);
    if (input.value > answer) {
      message.innerHTML = 'COLDER!'
    } else {
      message.innerHTML = 'HOTTER!'
    }
    var guesses = document.querySelectorAll('li');
    for (var i = 0; i < guesses.length; i++) {
      if (!guesses[i].textContent) {
        guesses[i].textContent = input.value;
        break;
      }
    }
  }
});

resetBtn.addEventListener('click', function() {
  answer = (Math.floor(Math.random() * 100) + 1).toString();
  message.innerHTML = '';
  var guesses = document.querySelectorAll('li');
  for (var i = 0; i < guesses.length; i++) {
    guesses[i].textContent = '';
    }
  input.value = '';
});

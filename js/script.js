let buttonRock = document.getElementById('button-rock');
let buttonPaper = document.getElementById('button-paper');
let buttonScissors = document.getElementById('button-scissors');

let computerWins = 0;
let playerWins = 0;

function buttonClicked(argButtonName) {
  
  clearMessages();
  clearWinsMessage();
  console.log(argButtonName + ' został kliknięty');

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'rock';
  } else if (argMoveId == 2) {
    return 'paper';
  } else if (argMoveId == 3) {
    return 'scissors'
  } 
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
    printMessage('You win!');
    playerWin = true;
  } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
    printMessage('You win!');
    playerWin = true;
  } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
    printMessage('You win!');
    playerWin = true;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Draw <3');
  } else {
    printMessage('You lose :(');
    computerWin = true;
  }
  printMessage('I played ' + argComputerMove + ', you played ' + argPlayerMove);
}

function countWins() {
  if (playerWin) {
    playerWins += 1;
  } else if (computerWin) {
    computerWins += 1;
  }
  printWinsMessage('Me: ' + computerWins + ' You: ' + playerWins);
}

let playerWin;
let computerWin;
let playerMove = argButtonName;
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
countWins();
}

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });




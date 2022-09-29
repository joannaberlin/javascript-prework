const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let comuputerWinsSum = 0;
let playerWinsSum = 0;

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
  if ((argPlayerMove == 'paper' && argComputerMove == 'rock') ||
      (argPlayerMove == 'rock' && argComputerMove == 'scissors') ||
      (argPlayerMove == 'scissors' && argComputerMove == 'paper')) {
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
    playerWinsSum += 1;
  } else if (computerWin) {
    comuputerWinsSum += 1;
  }
  printWinsMessage('Me: ' + comuputerWinsSum + ' You: ' + playerWinsSum);
}

let playerWin;
let computerWin;
const playerMove = argButtonName;
const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
const computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
countWins();
}

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });




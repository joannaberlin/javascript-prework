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
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce'
  } 
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerWin = true;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerWin = true;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerWin = true;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis <3');
  } else {
    printMessage('Przegrywasz :(');
    computerWin = true;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function countWins() {
 
 

  if (playerWin) {
    playerWins += 1;
  } else if (computerWin) {
    computerWins += 1;
  }
  printWinsMessage('Komputer: ' + computerWins + ' Ja: ' + playerWins);
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

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

//po kliknięciu w button dodawała się wartość do wyniku Player lub Komputera
//
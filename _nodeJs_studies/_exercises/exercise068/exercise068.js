/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function getPlay (message) {
  while (true) {
    const userPlay = prompt(message);

    if (validatePlay(userPlay)) {
      console.log('')
      return userPlay.trim().toUpperCase();
    } else {
      console.log('Jogada inválida, tente novamente.\n');
    };
  };
}

function validatePlay (userPlay) {
  if (!userPlay) {
    return false;
  };

  if (userPlay.trim().toUpperCase() !== 'I' && userPlay.trim().toUpperCase() !== 'P') {
    return false;
  };

  return true;
}

function getIntBetween0And10 (message) {
  while (true) {
    const userNumberStr = prompt(message);

    if (validatePositiveIntNumberStr(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('Valor inválido, o número precisa ser entre 0 e 10.\n');
    };
  };
}

function validatePositiveIntNumberStr (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr) || +numberStr < 0 || +numberStr > 10) {
    return false;
  };

  return true;
}

function getComputerNumber () {
  return Math.floor(Math.random() * (11 - 0));
}

function getWinner (number, userPlay) {
  if (userPlay === 'P') {
    if (number % 2 === 0) {
      return 'player';
    } else {
      return 'computer';
    };
  } else {
    if (number % 2 === 0) {
      return 'computer';
    } else {
      return 'player';
    };
  };
}

function getOddOrEvenMessage (number) {
  if (number % 2 === 0) {
    return 'PAR';
  } else {
    return 'ÍMPAR';
  };
}

function getWinOrLoseMessage (winner) {
  if (winner === 'player') {
    return 'GANHOU';
  } else {
    return 'PERDEU';
  };
}

function showFinalResult (totalWins) {
  console.log('------------------------------------------------------------');

  if (totalWins === 0) {
    console.log('GAME OVER! Você não ganhou nenhuma vez.\n');
  } else if (totalWins === 1) {
    console.log('GAME OVER! Você venceu apenas uma vez.\n');
  } else {
    console.log(`GAME OVER! Você venceu ${totalWins} vezes.\n`);
  };
}

// Main code
console.log('------------------------------------------------------------');
console.log('                        PAR OU ÍMPAR                        ');
console.log('------------------------------------------------------------');
console.log('Vamos jogar Par ou Ímpar. Digite um número entre 0 e 10 e escolha\nse quer jogar com \'Par\' ou \'Ímpar\'. BOA SORTE!\n');

let totalWins = 0;

while (true) {
  const userPlay = getPlay('Par ou Ímpar? [P/I] ');
  const userNumber = getIntBetween0And10('Digite um valor: ');
  const computerNumber = getComputerNumber();

  const totalNumber = userNumber + computerNumber;

  const winner = getWinner(totalNumber, userPlay);

  console.clear();

  console.log('------------------------------------------------------------');
  console.log('                          RESULTADO                         ');
  console.log('------------------------------------------------------------');
  console.log(`Você jogou ${userNumber} e o computador ${computerNumber}. Total de ${totalNumber}.`);
  console.log(`Deu ${getOddOrEvenMessage(totalNumber)}`);
  console.log('------------------------------------------------------------');
  console.log(`Você ${getWinOrLoseMessage(winner)}`);

  if (winner === 'computer') {
    break;
  } else {
    totalWins++
    console.log('Vamos jogar novamente...\n');
  };
};

showFinalResult(totalWins);
prompt('Aperte Enter para finalizar.');

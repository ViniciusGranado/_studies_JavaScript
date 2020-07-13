/* eslint-disable semi */

// Module import
const prompt = require('prompt-sync')();

// Functions
function showHeading () {
  console.log('======== PEDRA, PAPEL E TESOURA ========\n');
}

function showMenu () {
  console.log('Suas opções: ');
  console.log('[1] PEDRA');
  console.log('[2] PAPEL');
  console.log('[3] TESOURA');
}

function getUserPlay () {
  while (true) {
    const userPlayStr = prompt('Qual é a sua jogada? ');

    if (validatePlay(userPlayStr)) {
      return +userPlayStr;
    } else {
      console.clear();
      showHeading();
      console.log('Jogada inválida, tente novamente.\n');
      showMenu();
    };
  };
}

function validatePlay (playStr) {
  if (!playStr) {
    return false;
  };

  if (isNaN(playStr)) {
    return false;
  };

  if (+playStr < 1 || +playStr > 3) {
    return false;
  };

  return true;
}

function getWinner (userPlay, computerPlay) {
  if (userPlay === computerPlay) {
    return 'empate';
  };

  if (userPlay === 1) {
    if (computerPlay === 2) {
      return 'computador';
    } else {
      return 'jogador';
    };
  };

  if (userPlay === 2) {
    if (computerPlay === 1) {
      return 'jogador';
    } else {
      return 'computador';
    };
  };

  if (userPlay === 3) {
    if (computerPlay === 1) {
      return 'computador';
    } else {
      return 'jogador';
    };
  };
}

function sleep (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function showAnimation () {
  console.log('\nJO');
  sleep(500)
  console.log('KEN');
  sleep(500)
  console.log('PO!!!\n');
}

function getPlayName (play) {
  switch (play) {
    case 1:
      return 'PEDRA';
    case 2:
      return 'PAPEL';
    case 3:
      return 'TESOURA';
  };
}

function showPlays (userPlay, computerPlay) {
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Jogador jogou ${getPlayName(userPlay)}`);
  console.log(`Computador jogou ${getPlayName(computerPlay)}`);
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n')
}

function showFinalResult (winner) {
  if (winner === 'computador') {
    console.log('COMPUTADOR VENCE!\n');
  } else if (winner === 'jogador') {
    console.log('JOGADOR VENCE!\n');
  } else {
    console.log('EMPATE\n')
  }
}

// Main code
showHeading();
showMenu();

const userPlay = getUserPlay();
const computerPlay = Math.floor((Math.random() * (4 - 1) + 1));
const winner = getWinner(userPlay, computerPlay)

showAnimation();
showPlays(userPlay, computerPlay);
showFinalResult(winner);

prompt('Aperte Enter para finalizar.');

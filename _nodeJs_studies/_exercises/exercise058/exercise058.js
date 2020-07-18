// Module import
const prompt = require('prompt-sync')();

// Functions
function showHeading () {
  console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=-');
  console.log('  Vou pensar em um número entre 0 e 10. Tente adivinhar...');
  console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=-\n');
}

function getUserGuess () {
  while (true) {
    const userGuessStr = prompt('Em que número eu pensei? ');

    if (validateGuess(userGuessStr)) {
      return parseInt(userGuessStr.trim().replace(',', '.'));
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateGuess (userGuess) {
  if (!userGuess) {
    return false;
  }

  const convertedUserGuess = parseInt(userGuess.trim().replace(',', '.'));
  if (isNaN(convertedUserGuess)) {
    return false;
  };
  if (convertedUserGuess < 0 || convertedUserGuess > 10) {
    return false;
  };

  return true;
}

function getComputerNumber () {
  return Math.floor(Math.random() * (11 - 0)) + 0;
}

// Main code
showHeading();

const computerNumber = getComputerNumber();
let numberOfTries = 1;

while (true) {
  const userGuess = getUserGuess();

  if (userGuess === computerNumber) {
    break;
  } else {
    if (userGuess < computerNumber) {
      console.log('Mais... tente mais uma vez.\n');
    } else {
      console.log('Menos... tente mais uma vez.\n');
    };

    numberOfTries++;
  };
}

if (numberOfTries === 1) {
  console.log('\n----------------------------');
  console.log('   DE PRIMEIRA. PARABÉNS.   ');
  console.log('----------------------------\n');
} else {
  console.log('\n---------------------------------------');
  console.log(`  Acertou com ${numberOfTries} tentativas. Parabéns.`);
  console.log('---------------------------------------\n');
};

prompt('Aperte Enter para finalizar.');

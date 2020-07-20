// Module import
const prompt = require('prompt-sync')();

// Functions
function getItNumberBetween0And20 (message) {
  let userNumberStr = prompt(message);

  while (true) {
    if (validateNumber(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('');
      userNumberStr = prompt(`Número inválido. ${message}`);
    };
  };
}

function validateNumber (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || !Number.isInteger(+valueStr)) {
    return false;
  };

  if (+valueStr < 0 || + +valueStr > 20) {
    return false;
  };

  return true;
};

function showNumberInFull (number) {
  const valuesInFull = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte'];

  console.log(`\nVocê digitou o número ${valuesInFull[number]}.\n`);
};

function getUserOption (message) {
  const userOption = prompt(message);

  while (true) {
    if (validateOption(userOption)) {
      if (userOption.trim().toUpperCase() === 'S') {
        return true;
      } else {
        return false;
      };
    } else {
      console.log('');
      userOption = prompt(`Opção inválida. ${message}`);
    };
  };
}

function validateOption (userOption) {
  if (!userOption) {
    return false;
  };

  if (userOption.trim().toUpperCase() !== 'S' && userOption.trim().toUpperCase() !== 'N') {
    return false;
  };

  return true;
}

// Main code
while (true) {
  const userNumber = getItNumberBetween0And20('Digite um número inteiro entre 0 e 20: ');
  showNumberInFull(userNumber);

  const userWishesToContinue = getUserOption('Deseja digitar outro número: [S/N] ');

  if (!userWishesToContinue) {
    break;
  };

  console.log('');
};

console.log('');
prompt('Aperte Enter para finalizar.');

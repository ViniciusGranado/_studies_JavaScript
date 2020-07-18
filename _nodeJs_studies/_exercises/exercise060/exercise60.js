// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber () {
  while (true) {
    const userNumberStr = prompt('Digite um número inteiro positivo para calcular o seu fatorial: ');

    if (validateNumber(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateNumber (numberStr) {
  if (!numberStr) {
    return false;
  }

  if (isNaN(numberStr) || !Number.isInteger(+numberStr) || +numberStr < 0) {
    return false;
  };

  return true;
}

function getNumberFactorial (number) {
  if (number === 0) {
    return 1;
  } else {
    return number * getNumberFactorial(number - 1);
  };
}

// Main code
console.log('---------- FATORIAL ----------\n');

const userNumber = getIntNumber();
const numberFactorial = getNumberFactorial(userNumber);

console.log(`\nO fatorial de ${userNumber} é ${numberFactorial}.\n`);

prompt('Aperte Enter para finalizar.');

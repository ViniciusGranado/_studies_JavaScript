// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumber (message) {
  while (true) {
    const userNumberStr = prompt(message);

    if (validateNumber(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  }
}

function validateNumber (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || +valueStr < 0) {
    return false;
  };

  return true;
}

function getNumberOfDivisibles (value) {
  let divisibles = 0;

  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      divisibles += 1;
    };
  };

  return divisibles;
}

// Main code
console.log('====================');
console.log('   NÚMEROS PRIMOS   ');
console.log('====================');

const userNumber = getNumber('Digite um número inteiro: ');
const numberOfDivisibles = getNumberOfDivisibles(userNumber);

if (numberOfDivisibles === 2) {
  console.log(`\nO número ${userNumber} é divisível por 2 números, e portanto é primo.\n`)
} else {
  console.log(`\nO número ${userNumber} é divisível por ${numberOfDivisibles} números, e portanto não é primo.\n`)
};

prompt('Aperte Enter para finalizar.')

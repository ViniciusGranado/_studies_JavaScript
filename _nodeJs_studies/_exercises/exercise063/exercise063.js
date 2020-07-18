// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber (message) {
  while (true) {
    const userValueStr = prompt(message);

    if (validateIntNumber(userValueStr)) {
      return +userValueStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateIntNumber (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr)) {
    return false;
  };

  return true;
}

function showSequence (numberOfTerms) {
  const sequence = [0, 1];

  for (let i = 2; i < numberOfTerms; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  };

  console.log('\n' + sequence.join('\u279E ') + '\n');
}

// Main code
console.log('------------------------------------------');
console.log('           SEQUÊNCIA DE FIBONACCI         ');
console.log('------------------------------------------\n');

console.log('Este programa irá mostrar a quantidade de termos da sequência de Fibonacci que você digitar.');
const numberOfTerms = getIntNumber('Quantos termos deseja mostrar? ');

showSequence(numberOfTerms);

prompt('Aperte Enter para finalizar.');

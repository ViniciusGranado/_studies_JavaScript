// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber (message) {
  let userNumberStr = prompt(message);
  while (true) {
    if (validateIntNumber(userNumberStr)) {
      return +userNumberStr;
    } else {
      userNumberStr = prompt(`Valor inválido. ${message}`);
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
};

function getUserOption (message) {
  let userOption = prompt(message);

  while (true) {
    if (validateUserOption(userOption)) {
      return userOption.trim().toUpperCase() === 'S';
    } else {
      userOption = prompt(`Opção inválida. ${message}`);
    };
  };
}

function validateUserOption (userOption) {
  if (!userOption) {
    return false;
  };

  if (userOption.trim().toUpperCase() !== 'S' && userOption.trim().toUpperCase() !== 'N') {
    return false;
  };

  return true;
}

function getOddEvenArrays (numbersArray) {
  const even = [];
  const odd = [];

  for (let i of numbersArray) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    };
  };

  return [even, odd];
}

function formatArray(array) {
  if (array.length <= 1) {
    return array;
  } else {
    return array.slice(0, -1).join(', ') + ' e ' + array.slice(-1);
  };
}

// Main code
const values = [];

while (true) {
  values.push(getIntNumber('Digite um valor: '));

  const userWishesToContinue = getUserOption('Deseja inserir outro número: [S/N] ');

  if (!userWishesToContinue) {
    break;
  };

  console.log('');
};

const oddEvenArrays = getOddEvenArrays(values);

console.log(`\n\A lista completa de número é: ${formatArray(values)}.`);
console.log(`A lista de números pares é: ${formatArray(oddEvenArrays[0])}.`);
console.log(`A lista de números ímpares é: ${formatArray(oddEvenArrays[1])}.\n`);

prompt('Aperte Enter para finalizar.');

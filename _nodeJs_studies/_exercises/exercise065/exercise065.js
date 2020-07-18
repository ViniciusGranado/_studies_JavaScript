// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber (message) {
  while (true) {
    const userNumberStr = prompt(message);

    if (validateIntNumberStr(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  }
}

function validateIntNumberStr (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr)) {
    return false;
  };

  return true;
}

function getUserOption (message) {
  while (true) {
    const userOption = prompt(message);

    if (validateUserOption(userOption)) {
      return userOption.toUpperCase();
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateUserOption (userOption) {
  if (!userOption) {
    return false;
  };

  if (userOption.toUpperCase() !== 'N' && userOption.toUpperCase() !== 'S') {
    return false;
  };

  return true;
}

function getMeanArray (numbersArray) {
  const arraySum = numbersArray.reduce((acc, cur) => {
    return acc + cur;
  });

  return arraySum / numbersArray.length;
}

function maxArray (numbersArray) {
  return numbersArray.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });
}

function minArray (numbersArray) {
  return numbersArray.reduce((acc, cur) => {
    return Math.min(acc, cur);
  });
}

// Main code
console.log('------------------------------');
console.log('      MÉDIA DOS NÚMEROS       ');
console.log('------------------------------');
console.log('Este programa irá mostrar a média dos números digitados abaixo.\n');

const numbersArray = [];

while (true) {
  numbersArray.push(getIntNumber('Digite um número inteiro: '));

  const userOption = getUserOption('Deseja continuar? [S/N] ');

  if (userOption === 'N') {
    break;
  };

  console.log('');
};

if (numbersArray.length === 1) {
  console.log(`\nVocê digitou apenas o número ${numbersArray[0]}.\n`);
} else {
  console.log(`\nVocê digitou ${numbersArray.length} números e a média foi ${getMeanArray(numbersArray).toFixed(2)}.`)
  console.log(`O maior valor foi ${maxArray(numbersArray)} e o menor foi ${minArray(numbersArray)}.\n`);
};

prompt('Aperte Enter para finalizar.');

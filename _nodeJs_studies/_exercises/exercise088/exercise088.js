// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntPositiveNumber (message) {
  while (true) {
    const userNumberStr = prompt(message);

    if (validateIntPositiveNumber(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateIntPositiveNumber (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr) || +numberStr < 0) {
    return false;
  };

  return true;
}

function get6RandomNumbersBetween1and60 () {
  const numbersArray = [];
  for (let i = 0; i < 6; i++) {
    numbersArray.push(Math.floor(Math.random() * (61 - 1)) + 1)
  };

  return numbersArray;
};

function sortNumbersArray (numbersArray) {
  return numbersArray.sort((a, b) => a - b);
}

// Main code
console.log('----------------------------------------');
console.log('      GERADOR DE JOGOS DA MEGA SENA     ');
console.log('----------------------------------------');

const numberOfGames = getIntPositiveNumber('Quantos jogos serão gerados: ');
console.log('----------------------------------------');

for (let i = 0; i < numberOfGames; i++) {
  const sortedArray = sortNumbersArray(get6RandomNumbersBetween1and60());

  console.log(`Jogo ${i + 1}: [${sortedArray.join(', ')}]`);
};

console.log('-------------< BOA SORTE! >-------------');

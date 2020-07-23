// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber (message) {
  while (true) {
    const userNumberStr = prompt(message);

    if (validateIntNumber(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log(`Valor inválido. ${message}`);
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

function getOddAndEvenArrays (array) {
  const even = [];
  const odds = [];

  for (const i of array) {
    if (i % 2 === 0) {
      even.push(i)
    } else {
      odds.push(i);
    }
  };

  return [sortNumbersArray(even), sortNumbersArray(odds)];
}

function sortNumbersArray (numbersArray) {
  const copyArray = [...numbersArray];

  return copyArray.sort((a, b) => a - b);
}

function formatArray (array) {
  if (array.length <= 1) {
    return array;
  }

  return array.slice(0, -1).join(', ') + ' e ' + array.slice(-1);
}

// Main code
const values = [];
const messages = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto', 'sétimo'];

for (let i = 0; i < 7; i++) {
  values.push(getIntNumber(`Digite o ${messages[i]} número: `));
};

const oddAndEvenArrays = getOddAndEvenArrays(values);

console.log(`\nOs valores pares digitados foram ${formatArray(oddAndEvenArrays[0])}.`);
console.log(`Os valores ímpares digitados foram ${formatArray(oddAndEvenArrays[1])}.\n`);

prompt('Aperte Enter para finalizar.');

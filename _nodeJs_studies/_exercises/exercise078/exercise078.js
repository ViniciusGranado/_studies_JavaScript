// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumber (message) {
  let userNumberStr = prompt(message);

  while (true) {
    if (validateNumberStr(userNumberStr.replace(',', '.'))) {
      console.log('');
      return +userNumberStr.replace(',', '.');
    } else {
      console.log('');
      userNumberStr = prompt(`Valor inválido. ${message}`);
    };
  };
}

function validateNumberStr (valueStr) {
  if (!valueStr || isNaN(valueStr)) {
    return false;
  };

  return true;
}

function maxArray (valuesArray) {
  return valuesArray.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });
}

function minArray (valuesArray) {
  return valuesArray.reduce((acc, cur) => {
    return Math.min(acc, cur);
  });
}

function joinArray (array) {
  return array.slice(0, -1).join(', ') + ' e ' + array.slice(-1)
}
// Main code
const userValues = [
  getNumber('Digite o primeiro número: '),
  getNumber('Digite o segundo número: '),
  getNumber('Digite o terceiro número: '),
  getNumber('Digite o quarto número: '),
  getNumber('Digite o quinto número: ')
];

const maxValue = maxArray(userValues);
const minValue = minArray(userValues);

console.log(`Você digitou os valores ${joinArray(userValues)}`);
console.log(`O maior valor digitado foi ${maxValue} na posição ${userValues.indexOf(maxValue) + 1}.`);
console.log(`O menos valor digitado foi ${minValue} na posição ${userValues.indexOf(minValue) + 1}.`);

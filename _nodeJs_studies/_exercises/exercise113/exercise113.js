// Module import
const prompt = require('prompt-sync')();

// Functions
function getFloatPositiveNumber (message) {
  while (true) {
    const numberStr = prompt(message);

    try {
      if (numberStr === '') throw new Error('Você deve digitar um valor.\n')
      if (!numberStr) throw new Error('Ocorreu um erro inesperado.\n');

      const convertedValue = +numberStr.replace(',', '.');

      if (isNaN(convertedValue)) throw new Error('Valor inválido\n');
      if (convertedValue < 0) throw new Error('O valor deve ser positivo.\n');

      return convertedValue;
    } catch (error) {
      console.log(error.message);
    };
  };
}

function getIntNumber (message) {
  while (true) {
    const valueStr = prompt(message);

    try {
      if (valueStr === '') throw new Error('Você deve digitar um valor.\n');
      if (!valueStr) throw new Error('Ocorreu um erro inesperado.\n');
      if (isNaN(+valueStr)) throw new Error('Você deve digitar um número válido.\n');

      return +valueStr;
    } catch (error) {
      console.log(error.message);
    };
  };
}

// Main code
const userFloatValue = getFloatPositiveNumber('Digite um número real: ');
console.log(userFloatValue);

console.log();

const userIntValue = getIntNumber('Digite um número: ');
console.log(userIntValue);

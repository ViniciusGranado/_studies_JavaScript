// Module import
const prompt = require('prompt-sync')();

// Functions
function readInt (message) {
  while (true) {
    const valueStr = prompt(message);

    if (validateIntValue(valueStr)) {
      return +valueStr;
    } else {
      console.log('Valor inválido, deve ser um valor inteiro e positivo.\n');
    };
  };
}

function validateIntValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || !Number.isInteger(+valueStr) || +valueStr < 0) {
    return false;
  };

  return true;
}

// Main code
const userNumber = readInt('Digite um número inteiro positivo: ');
console.log(`Você acabou de digitar o número ${userNumber}.`);

/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumbersArray () {
  const messages = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto'];
  const numbers = [];

  for (let i = 0; i < 6; i++) {
    while (true) {
      console.log('')
      const userNumberStr = prompt(`Digite o ${messages[i]} número: `);

      if (validateNumber(userNumberStr)) {
        numbers.push(+userNumberStr);
        break;
      } else {
        console.log('Valor inválido, tente novamente.');
      };
    };
  };

  return numbers;
}

function validateNumber (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || !Number.isInteger(+valueStr)) {  
    return false;
  };

  return true;
}

function getSumEvenNumbers (arrayNumbers) {
  const sum = arrayNumbers.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);

  return sum;
}
// Main code
console.log('**************************');
console.log('* SOMA DOS NÚMEROS PARES *');
console.log('**************************');

console.log('Este programa ira mostrar a soma dos números pares que você digitar.')
prompt('Aperte Enter para começar.');

const numbersArray = getNumbersArray();
const sumEvemNumbers = getSumEvenNumbers(numbersArray);

console.log(`\nA soma dos numeros pares é ${sumEvemNumbers}.\n`)

prompt('Aperte Enter par finalizar.')

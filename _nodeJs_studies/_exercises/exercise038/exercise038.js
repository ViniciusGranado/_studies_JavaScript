// Module import
const prompt = require('prompt-sync')();

// Functions
function get2Numbers () {
  const messages = ['Digite o primeiro número: ', 'Digite o segundo número: '];
  const numbers = [];

  for (let i = 0; i < 2; i++) {
    while (true) {
      const userNumberStr = prompt(messages[i]);

      if (validateNumber(userNumberStr)) {
        numbers.push(Number(userNumberStr.trim().replace(',', '.')));
        break;
      } else {
        console.log('Valor inválido, tente novamente.');
      };
    };
  };

  return numbers;
}

function validateNumber (value) {
  if (!validateNumber) {
    return false;
  };

  const convertedValue = Number(value.trim().replace(',', '.'));
  if (isNaN(convertedValue)) {
    return false;
  }

  return true;
}

// Main code
const userNumbersArray = get2Numbers();

if (userNumbersArray[0] > userNumbersArray[1]) {
  console.log('\nO PRIMEIRO número é maior.\n');
} else if (userNumbersArray[0] === userNumbersArray[1]) {
  console.log('\nOs dois valores são IGUAIS.\n');
} else {
  console.log('\nO SEGUNDO número é maior.\n');
};

prompt('Aperte Enter para finalizar.');

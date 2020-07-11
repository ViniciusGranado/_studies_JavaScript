// Module import
const prompt = require('prompt-sync')();

// Functions
const get3Values = () => {
  const values = [];
  const messages = ['Digite o primeiro número: ', 'Digite o segundo número: ', 'Digite o terceiro número: '];

  for (let i = 0; i < 3; i++) {
    while (true) {
      const valueStr = prompt(messages[i]);

      if (!validateNumber(valueStr)) {
        console.log('Valor invalido, tente novamente.\n')
      } else {
        values.push(Number(valueStr.trim().replace(',', '.')));
        console.log('')
        break;
      }
    };
  };

  return values;
}

const validateNumber = (value) => {
  if (!value) {
    return false;
  };

  const convertedValue = Number(value.trim().replace(',', '.'));

  if (isNaN(convertedValue)) {
    return false;
  };

  return true;
}

const findMaxNumberArray = (array) => {
  return array.reduce((acc, cur) => Math.max(acc, cur));
}

const findMinNumberArray = (array) => {
  return array.reduce((acc, cur) => Math.min(acc, cur));
}

// Main code
const numbers = get3Values();
const maxNumber = findMaxNumberArray(numbers);
const minNumber = findMinNumberArray(numbers);

console.log('\n----------RESULTADO----------')
console.log(`O menor valor digitado foi ${minNumber}.`);
console.log(`O maior valor digitado foi ${maxNumber}.`);
console.log('-----------------------------')

prompt('Aperte Enter para finalizar.');

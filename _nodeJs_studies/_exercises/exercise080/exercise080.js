// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumbers () {
  const messages = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto'];
  const values = [];

  for (let i = 0; i < 5; i++) {
    while (true) {
      const valueStr = prompt(`Digite o ${messages[i]} valor: `);

      if (validateNumberStr(valueStr)) {
        const convertedValue = +valueStr.replace(',', '.');

        for (let i = 0; i < values.length; i++) {
          if (convertedValue < values[i]) {
            values.splice(i, 0, convertedValue)
            break;
          };
        };

        if (values.indexOf(convertedValue) === -1) {
          values.push(convertedValue);
          console.log('Adicionado ao final da lista.');
        } else {
          console.log(`Adicionado a posição ${values.indexOf(convertedValue)}`);
        };

        break;
      } else {
        console.log('Valor inválido, tente novamente.\n');
      };
    };
  };

  return values;
}

function validateNumberStr (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.'))) {
    return false;
  };

  return true;
}

function formatArray (numbersArray) {
  return numbersArray.slice(0, -1).join(', ') + ' e ' + numbersArray.slice(-1);
}
// Main code
const values = getNumbers();

console.log(`\nOs valores digitados foram: ${formatArray(values)}\n`);

prompt('Aperte Enter para finalizar.');

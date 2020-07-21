// Module import
const prompt = require('prompt-sync')();

// Functions
function getValue (message) {
  let userValueStr = prompt(message);

  while (true) {
    if (!userValueStr || isNaN(userValueStr.replace(',', '.'))) {
      userValueStr = prompt(`Valor inválido. ${message}`);
    } else {
      return +userValueStr.replace(',', '.');
    };
  };
}

function getUserOption (message) {
  let userOption = prompt(message);

  while (true) {
    if (!userOption || (userOption.trim().toUpperCase() !== 'S' && userOption.trim().toUpperCase() !== 'N')) {
      userOption = prompt(`Opção inválida. ${message}`);
    } else {
      return userOption.trim().toUpperCase();
    };
  };
}

function formatArray (array) {
  return array.slice(0, -1).join(', ') + ' e ' + array.slice(-1);
}

// Main code
const values = [];

while (true) {
  const userValue = getValue('Digite o valor desejado: ');

  if (values.includes(userValue)) {
    console.log('Valor já consta na lista.');
  } else {
    console.log('Valor adicionado com sucesso.');
    values.push(userValue);
  };

  const userOption = getUserOption('Deseja adicionar outro valor? [S/N] ');

  if (userOption === 'N') {
    break;
  };
};

console.log(`\nOs valores digitados foram ${formatArray(values)}\n`);

prompt('Aperte Enter para finalizar.');

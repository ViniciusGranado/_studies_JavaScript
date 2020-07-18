// Module import
const prompt = require('prompt-sync')();

// Functions
function showHeading () {
  console.log('------------------------------');
  console.log('          CALCULADORA         ')
  console.log('------------------------------\n');
}

function showMenu () {
  console.log('[ 1 ] Somar');
  console.log('[ 2 ] Multiplicar');
  console.log('[ 3 ] Maior número');
  console.log('[ 4 ] Utilizar novos números');
  console.log('[ 5 ] Sair do programa\n');
}

function get2Numbers () {
  const messages = ['primeiro', 'segundo'];
  const values = [];

  for (let i = 0; i < 2; i++) {
    while (true) {
      const userNumberStr = prompt(`Digite o ${messages[i]} valor: `);

      if (validateNumber(userNumberStr)) {
        values.push(+userNumberStr);
        console.log('');
        break;
      } else {
        console.log('Valor inválido, tente novamente.\n');
      };
    };
  };

  return values;
}

function validateNumber (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || +numberStr < 0 || !Number.isInteger(+numberStr)) {
    return false;
  };

  return true;
};

function getUserOption () {
  while (true) {
    const userOptionStr = prompt('Digite a sua opção: ');

    if (validateUserOption(userOptionStr)) {
      return +userOptionStr.trim();
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateUserOption (optionStr) {
  if (!optionStr) {
    return false;
  };

  if (isNaN(optionStr) || !Number.isInteger(+optionStr) || +optionStr < 1 || +optionStr > 5) {
    return false;
  };

  return true;
}

// Main code
loop1:
while (true) {
  console.clear();
  showHeading();
  console.log('Este programa irá realizar operações utilizando dois números.');
  console.log('Digite abaixo dois números inteiros positivos.\n')

  const valuesArray = get2Numbers();

  console.clear();
  showHeading();

  console.log(`Valor 1: ${valuesArray[0]}`);
  console.log(`Valor 2: ${valuesArray[1]}\n`);

  loop2:
  while (true) {
    showMenu();
    const userOption = getUserOption();

    if (userOption === 1) {
      console.log(`\nA soma entre ${valuesArray[0]} e ${valuesArray[1]} é ${valuesArray[0] + valuesArray[1]}.\n`)
    };
    if (userOption === 2) {
      console.log(`\nO produto entre ${valuesArray[0]} e ${valuesArray[1]} é ${valuesArray[0] * valuesArray[1]}.\n`)
    };
    if (userOption === 3) {
      console.log(`\nO maior número entre ${valuesArray[0]} e ${valuesArray[1]} é ${Math.max(valuesArray[0], valuesArray[1])}.\n`);
    };
    if (userOption === 4) {
      continue loop1;
    };
    if (userOption === 5) {
      break loop1;
    };
  };
};

console.log('');
prompt('Aperte Enter para finalizar.');

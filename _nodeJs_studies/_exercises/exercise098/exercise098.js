// Module import
const prompt = require('prompt-sync')();

// Functions
function getFloatValue (message) {
  while (true) {
    const valueStr = prompt(message);

    if (validateFloatValue(valueStr)) {
      return +valueStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateFloatValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.'))) {
    return false;
  };

  return true;
}

function numbersCount (start, end, step) {
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  console.log(`Contagem de ${start} até ${end} em passo ${Math.abs(step)}.`);

  const values = [];

  if (start < end) {
    for (let i = start; i <= end; i = i + Math.abs(step)) {
      values.push(i);
    };
  } else {
    for (let i = start; i >= end; i = i + -Math.abs(step)) {
      values.push(i);
    };
  }

  values.push('FIM!');
  console.log(values.join(', '));
}

function personalCount () {
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  console.log('CONTAGEM PERSONALIZADA');

  const start = getFloatValue('Início: ');
  const end = getFloatValue('Fim: ');
  const step = getFloatValue('Passo: ');

  numbersCount(start, end, step);
}
// Main code
numbersCount(1, 10, 1);
numbersCount(10, 0, 2);
personalCount();

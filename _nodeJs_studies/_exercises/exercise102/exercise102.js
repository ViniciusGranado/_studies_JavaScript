// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntValue (message) {
  while (true) {
    const valueStr = prompt(message);

    if (validateIntValue(valueStr)) {
      return +valueStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
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

function factorial (number, show = false) {
  console.log('--------------------');
  let factorial = 1;
  const calculusProcess = [];

  for (let i = number; i > 0; i--) {
    if (show) { calculusProcess.push(i) };

    factorial *= i;
  };

  if (show) {
    console.log(`${calculusProcess.join(' x ')} = ${factorial}`)
  } else {
    console.log(factorial);
  };
}

// Main code
const userValue = getIntValue('Digite um número para saber o seu fatorial: ');
factorial(userValue, true);

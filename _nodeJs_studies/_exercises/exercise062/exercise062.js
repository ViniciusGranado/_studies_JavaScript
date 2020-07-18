// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumber (message, isInt = false) {
  while (true) {
    const userValueStr = prompt(message);

    if (validateValue(userValueStr, isInt)) {
      return +userValueStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateValue (valueStr, isInt) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.'))) {
    return false;
  };

  if (isInt && !Number.isInteger(+valueStr)) {
    return false;
  };

  return true;
}

function showProgression (firstTerm, commonDifference, numberOfTerms) {
  const progressionTerms = [];
  let i = 0;
  let term = firstTerm;

  while (i < numberOfTerms) {
    progressionTerms.push(term);
    i++;
    term += commonDifference;
  };

  console.log('\n' + progressionTerms.join('\u279E ') + '\n');
}

// Main code
console.log('------------------------------');
console.log('     10 TERMOS DE UMA PA      ');
console.log('------------------------------');

let firstTerm = getNumber('Primeiro termo: ');
const commonDifference = getNumber('Razão: ');

showProgression(firstTerm, commonDifference, 10);

firstTerm += commonDifference * 10;

while (true) {
  const moreTerms = getNumber('Quantos termos deseja mostrar a mais? Digite 0 para finalizar.', true);

  if (moreTerms === 0) {
    console.log('');
    break;
  };

  showProgression(firstTerm, commonDifference, moreTerms);

  firstTerm += commonDifference * moreTerms;
}

prompt('Aperte Enter para finalizar.')

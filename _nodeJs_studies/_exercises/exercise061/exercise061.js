// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumber (message) {
  while (true) {
    const userValueStr = prompt(message);

    if (validateValue(userValueStr)) {
      return +userValueStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.'))) {
    return false;
  };

  return true;
}

function showProgression (firstTerm, commonDifference) {
  const progressionTerms = [];
  let i = 0;
  let term = firstTerm;

  while (i < 10) {
    progressionTerms.push(term);
    i++;
    term += commonDifference;
  };

  console.log(`\n${progressionTerms[0]}\u279E ${progressionTerms[1]}\u279E ${progressionTerms[2]}\u279E ${progressionTerms[3]}\u279E ${progressionTerms[4]}\u279E ${progressionTerms[5]}\u279E ${progressionTerms[6]}\u279E ${progressionTerms[7]}\u279E ${progressionTerms[8]}\u279E ${progressionTerms[9]}\n`);
}

// Main code
console.log('------------------------------');
console.log('     10 TERMOS DE UMA PA      ');
console.log('------------------------------');

const fistTerm = getNumber('Primeiro termo: ');
const commonDifference = getNumber('Razão: ');

showProgression(fistTerm, commonDifference);

prompt('Aperte Enter para finalizar.')

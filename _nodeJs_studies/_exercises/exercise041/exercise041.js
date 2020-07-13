// Module import
const prompt = require('prompt-sync')();

// Functions
function getBirthYear () {
  while (true) {
    const userBirthYearStr = prompt('Digite o seu ano de aniversário: ');

    if (validateBirthYear(userBirthYearStr)) {
      return +userBirthYearStr.trim();
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateBirthYear (birthYearStr) {
  if (!birthYearStr) {
    return false;
  };

  if (isNaN(birthYearStr) || +birthYearStr < 0) {
    return false;
  };

  return true;
}

function getCategory (age) {
  if (age <= 9) {
    return 'MIRIM';
  } else if (age <= 14) {
    return 'INFANTIL';
  } else if (age <= 19) {
    return 'JÚNIOR';
  } else if (age <= 25) {
    return 'SÊNIOR';
  } else {
    return 'MASTER';
  };
}

// Main code
const userBirthYear = getBirthYear();
const userAge = (new Date().getFullYear()) - userBirthYear;
const userCategory = getCategory(userAge);

console.log(`\nO atleta tem ${userAge} anos.`);
console.log(`Classificação: ${userCategory}.\n`);

prompt('Aperte Enter para finalizar.');

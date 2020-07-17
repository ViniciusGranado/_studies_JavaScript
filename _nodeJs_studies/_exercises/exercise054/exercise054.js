/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function get7Ages () {
  const ages = []
  const messages = ['1ª', '2ª', '3ª', '4ª', '5ª', '6ª', '7ª'];
  const actualYear = new Date().getFullYear();

  for (let i = 0; i < 7; i++) {
    while (true) {
      const birthYearStr = prompt(`Em que ano nasceu a ${messages[i]} pessoa? `);

      const validBirthYearStatus = validateBirthYear(birthYearStr, actualYear);
      if (validBirthYearStatus === 'ok') {
        ages.push(actualYear - (+birthYearStr));
        console.log('');
        break;
      } else {
        switch (validBirthYearStatus) {
          case 'invalidValue':
            console.log('Valor inválido, tente novamente.\n');
            break;
          case 'tooLow':
            console.log('Por favor, digite um valor superior à 1900.\n');
            break;
          case 'tooHigh':
            console.log(`Não é possível entrar um valor superior ${actualYear}.\n`);
            break;
          default:
            console.log('[ERRO] Ocorreu um erro inesperado.\n');
        };
      }
    }
  }

  return ages;
}

function validateBirthYear (birthYearStr, actualYear) {
  if (!birthYearStr || isNaN(birthYearStr)) {
    return 'invalidValue';
  };

  if (+birthYearStr < 1900) {
    return 'tooLow';
  };

  if (+birthYearStr > actualYear) {
    return 'tooHigh';
  }

  return 'ok';
}

function getNumberOfMinorsAndMajors (agesArray) {
  let minors = 0;
  let majors = 0;

  for (const i of agesArray) {
    if (i > 18) {
      majors++;
    } else {
      minors++;
    };
  };

  return [minors, majors];
}

// Main code
const agesArray = get7Ages();
const numberOfMinorsAndMajors = getNumberOfMinorsAndMajors(agesArray);

console.log(`Ao todo temos ${numberOfMinorsAndMajors[0]} pessoas menores de idade e ${numberOfMinorsAndMajors[1]} pessoas maiores de idade.`);

prompt('Aperte Enter para finalizar.');

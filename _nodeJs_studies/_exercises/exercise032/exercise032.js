// Module Import
const prompt = require('prompt-sync')();

// Function
function getYear () {
  while (true) {
    const userYearStr = prompt('Que ano deseja analisar? Digite 0 para analisar o ano atual: ');

    if (!validateYear(userYearStr)) {
      console.log('Valor inválido, tente novamente.\n');
      continue;
    } else {
      const convertedYear = Number(userYearStr.trim());

      if (convertedYear === 0) {
        const currentTime = new Date();
        return currentTime.getFullYear();
      } else {
        return convertedYear;
      }
    }
  };
}

function validateYear (yearStr) {
  if (!yearStr) {
    return false;
  };

  const convertedYear = Number(yearStr.trim());

  if (isNaN(convertedYear)) {
    return false;
  };
  if (convertedYear < 0) {
    return false;
  }

  return true;
}

function isLeapYear (year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Main code
const userYear = getYear();
console.log(userYear);

if (isLeapYear(userYear)) {
  console.log(`\nO ano ${userYear} É BISSEXTO.\n`);
} else {
  console.log(`\nO ano ${userYear} NÃO É BISSEXTO.\n`);
};

prompt('Aperte Enter para finalizar.');

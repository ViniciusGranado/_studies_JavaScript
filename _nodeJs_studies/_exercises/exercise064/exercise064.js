// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber () {
  while (true) {
    const userNumberStr = prompt('Digite um número [999 para parar]: ');

    if (validateIntNumberStr(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateIntNumberStr (intNumberStr) {
  if (!intNumberStr) {
    return false;
  };

  if (isNaN(intNumberStr) || !Number.isInteger(+intNumberStr)) {
    return false;
  };

  return true;
}

function sumArray (numbersArray) {
  return numbersArray.reduce((acc, cur) => {
    return acc + cur;
  });
}

// Main code
console.log('********************');
console.log('  SOMANDO NÚMEROS   ');
console.log('********************');
console.log('Este programa irá mostrar a soma dos números que você digitar.\n');

const numbersArray = [];

while (true) {
  const userNumber = getIntNumber();

  if (userNumber === 999) {
    break;
  };

  numbersArray.push(userNumber);
};

if (numbersArray.length === 0) {
  console.log('\nVocê não digitou nenhum número.\n');
} else if (numbersArray.length === 1) {
  console.log(`\nVocê digitou apenas o número ${numbersArray[0]}.\n`);
} else {
  console.log(`\nVocê digitou ${numbersArray.length} números e a soma entre eles foi ${sumArray(numbersArray)}.\n`);
};

prompt('Aperte Enter para finalizar.');

// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntValues () {
  const values = [];

  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      while (true) {
        const userNumberStr = prompt(`Digite o valor da posição [${i}, ${k}]: `);

        if (validateIntNumber(userNumberStr)) {
          values.push(+userNumberStr);
          break;
        } else {
          console.log('Valor inválido, tente novamente.\n');
        };
      };
    };
  };

  return values;
}

function validateIntNumber (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr)) {
    return false;
  };

  return true;
}

function show3x3matrix (numbersArray) {
  let tempStr = '';
  console.log('-------------------------');

  for (let i = 0; i < 9; i++) {
    tempStr += `[${formatValue(numbersArray[i])}] `;

    if ((i + 1) % 3 === 0) {
      console.log(tempStr);
      tempStr = '';
    }
  }

  console.log('-------------------------');
}

function formatValue (value) {
  const valueStr = value.toString();
  let formattedValue = ' '.repeat((5 - valueStr.length) / 2) + valueStr + ' '.repeat((5 - valueStr.length) / 2);

  while (formattedValue.length < 5) {
    formattedValue = ' ' + formattedValue;

    if (formattedValue.length < 5) {
      formattedValue += ' ';
    };
  };

  return formattedValue;
}

function getSumEvenValues (numbersArray) {
  return numbersArray.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    };

    return acc;
  }, 0);
}

function getSumThirdColumn (numbersArray) {
  return numbersArray.reduce((acc, cur, ind) => {
    if ((ind + 1) % 3 === 0) {
      return acc + cur;
    };

    return acc;
  }, 0)
}

function getBiggestValueSecondLine (numbersArray) {
  let biggestValue = numbersArray[3];
  for (let i = 4; i <= 5; i++) {
    if (numbersArray[i] > biggestValue) {
      biggestValue = numbersArray[i];
    };
  };

  return biggestValue;
};

// Main code
const userValues = getIntValues();
const sumEvenValues = getSumEvenValues(userValues);
const sumThirdColumn = getSumThirdColumn(userValues);
const biggestValueOfSecondLine = getBiggestValueSecondLine(userValues);

show3x3matrix(userValues);

console.log(`A soma de todos os valores pares digitados é ${sumEvenValues}.`);
console.log(`A soma dos valores da terceira coluna é ${sumThirdColumn}.`);
console.log(`O maior valor da segunda linha é ${biggestValueOfSecondLine}.`);

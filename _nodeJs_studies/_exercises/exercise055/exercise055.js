/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function getValues () {
  const messages = ['1ª', '2ª', '3ª', '4ª', '5ª'];
  const weights = [];

  for (let i = 0; i < 5; i++) {
    while (true) {
      const userValueStr = prompt(`Digite o peso da ${messages[i]} pessoa: `);

      if (validateNumber(userValueStr)) {
        weights.push(+userValueStr.replace(',', '.'));
        console.log('');
        break;
      } else {
        console.log('Valor inválido, tente novamente.\n');
      };
    }
  }

  return weights;
}

function validateNumber (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.')) || +valueStr.replace(',', '.') < 0) {
    return false;
  }

  return true;
}

function getSmallerAndBiggerWeight (weightsArray) {
  let smallerWeight = weightsArray[0];
  let biggerWeight = weightsArray[0];

  for (const i of weightsArray) {
    if (i < smallerWeight) {
      smallerWeight = i;
    };

    if (i > biggerWeight) {
      biggerWeight = i;
    }
  }

  return [smallerWeight, biggerWeight];
}

// Main code
const weightsArray = getValues();
const smallerAndBiggerWeights = getSmallerAndBiggerWeight(weightsArray);

console.log(`O menor peso lido foi ${smallerAndBiggerWeights[0].toFixed(2)}Kg.`);
console.log(`O maior peso lido foi ${smallerAndBiggerWeights[1].toFixed(2)}Kg.\n`);

prompt('Aperte Enter para finalizar.');

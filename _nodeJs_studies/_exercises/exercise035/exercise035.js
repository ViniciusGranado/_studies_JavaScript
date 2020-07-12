// Module import
const prompt = require('prompt-sync')();

// Functions
function getTriangleSides () {
  const messages = ['Primeiro segmento: ', 'Segundo segmento: ', 'Terceiro segmento: '];
  const triangleSides = [];

  for (let i = 0; i < 3; i++) {

    while (true) {
      const triangleSideStr = prompt(messages[i]);

      if (validateValue(triangleSideStr)) {
        triangleSides.push(Number(triangleSideStr.trim().replace(',', '.')));
        console.log('');
        break;
      } else {
        console.log('Valor inválido, tente novamente.\n');
      };
    };
  }

  return triangleSides;
}

function validateValue (value) {

  if (!value) {
    return false
  }

  const convertedValue = Number(value.trim().replace(',', '.'));
  if (isNaN(convertedValue) || convertedValue < 0) {
    return false;
  }

  return true;
}

function checkIfValuesFormTriangle (valuesArray) {
  const side0 = valuesArray[0];
  const side1 = valuesArray[1];
  const side2 = valuesArray[2];

  return (side0 + side1 > side2) && (side1 + side2 > side0) && (side0 + side2 > side1);
}

// Main code
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('Analisador de Triângulos')
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

const triangleSides = getTriangleSides();
const valuesFormTriangle = checkIfValuesFormTriangle(triangleSides);

if (valuesFormTriangle) {
  console.log('Os segmentos acima PODEM formar um triângulo!\n');
} else {
  console.log('Os segmentos acima NÃO PODEM formar um triângulo!\n');
};

prompt('Aperte Enter para finalizar.')

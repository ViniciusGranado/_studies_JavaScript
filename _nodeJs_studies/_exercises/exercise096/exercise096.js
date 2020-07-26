// Module import
const prompt = require('prompt-sync')();

// Functions
function getFloatValue (message) {
  while (true) {
    const valueStr = prompt(message);

    if (validateFloatValue(valueStr)) {
      return +valueStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateFloatValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.')) || +valueStr.replace(',', '.') < 0) {
   return false;
  };

  return true;
}

function getArea (width, length) {
  return width * length;
}

// Main code
console.log('Controle de terrenos');
console.log('--------------------');

const terrainWidth = getFloatValue('Largura: ');
console.log();
const terrainLength = getFloatValue('Comprimento: ');

const terrainArea = getArea(terrainWidth, terrainLength);

console.log(`\nA área de um terreno ${terrainWidth}x${terrainLength} é de ${terrainArea}m².\n`);

prompt('Aperte Enter para finalizar.')

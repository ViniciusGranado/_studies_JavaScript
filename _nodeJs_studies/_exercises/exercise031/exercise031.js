// Module import
const prompt = require('prompt-sync')();

// Functions
function getDistance () {
  while (true) {
    const userDistanceStr = prompt('Qual é a distância da sua viagem? km');

    if (validateDistance(userDistanceStr)) {
      return Number(userDistanceStr.trim().replace(',', '.'));
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateDistance (distanceStr) {
  if (!distanceStr) {
    return false;
  };

  const convertedDistance = Number(distanceStr.trim().replace(',', '.'));

  if (isNaN(convertedDistance)) {
    return false;
  };
  if (convertedDistance < 0) {
    return false;
  };

  return true;
}

function getTravelPrice (distance) {
  if (distance < 200) {
    return distance * 0.5;
  } else {
    return distance * 0.45;
  };
}

// Main code
const userDistance = getDistance();
const travelPrice = getTravelPrice(userDistance);
const formattedPrice = travelPrice.toFixed(2).replace('.', ',');

console.log(`\nVocê está prestes a começar uma viagem de ${userDistance}Km.`);
console.log(`E o preço da sua pasasgem será de R$${formattedPrice}.\n`);

prompt('Aperte Enter para finalizar.');

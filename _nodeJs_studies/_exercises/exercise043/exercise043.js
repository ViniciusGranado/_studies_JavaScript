// Module import
const prompt = require('prompt-sync')();

// Functions
function getValue (message) {
  while (true) {
    const valueStr = prompt(message);

    if (validateValue(valueStr)) {
      return +valueStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.\n');
    }
  };
}

function validateValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.')) || +valueStr.replace(',', '.') < 0) {
    return false;
  };

  return true;
}

function getIMC (weight, height) {
  return weight / (height ** 2);
}

// Main code
console.log('----------CALCULADORA DE IMC---------\n');
const userWeight = getValue('Qual é o seu peso? (Kg) ');
const userHeight = getValue('Qual é a sua altura? (m) ');
const userIMC = getIMC(userWeight, userHeight);

console.log(`\nO seu IMC é ${userIMC.toFixed(2)}.`);

if (userIMC < 18.5) {
  console.log('Você está ABAIXO DO PESO ideal\n');
} else if (userIMC < 25) {
  console.log('Parabéns, você está na faixa de PESO IDEAL\n');
} else if (userIMC < 30) {
  console.log('Você está na faixa de SOBREPESO\n');
} else if (userIMC < 40) {
  console.log('Você está na faixa de OBESIDADE\n');
} else {
  console.log('Você está na faixa de OBESIDADE MÓRBIDA, cuidado!\n');
};

prompt('Aperte Enter para finalizar.')

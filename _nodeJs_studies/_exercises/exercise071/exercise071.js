// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber (message) {
  while (true) {
    const userValueStr = prompt(message);

    if (validateNumberStr(userValueStr)) {
      return +userValueStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
};

function validateNumberStr (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr) || +numberStr < 0) {
    return false;
  }

  return true;
};

function getNumberOfNotes (value, notesArray) {
  const notes = {};

  for (const i of notesArray) {
    notes[i] = Math.floor(value / i);
    value -= notes[i] * i;
  };

  return notes;
}

function showResult (notes, notesArray) {
  for (const i of notesArray) {
    if (notes[i] !== 0) {
      console.log(`Total de ${notes[i]} cédulas de R$${i}.`);
    };
  };
}

// Main code
console.log('==============================');
console.log('          BANCO CEV           ');
console.log('==============================');

const userValue = getIntNumber('Valor que deseja sacar: R$');
const notesValue = [50, 20, 10, 1];

const numberOfNotes = getNumberOfNotes(userValue, notesValue);

showResult(numberOfNotes, notesValue);

console.log('==============================');
console.log('Volte sempre ao BANCO CEV! Tenha um bom dia!\n');

prompt('Aperte Enter para finalizar.');

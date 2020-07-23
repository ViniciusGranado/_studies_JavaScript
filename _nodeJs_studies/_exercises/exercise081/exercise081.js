// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumbers () {
  const numbersArray = [];

  while (true) {
    const userNumberStr = prompt('Digite um valor: ');

    if (validateNumber(userNumberStr)) {
      numbersArray.push(+userNumberStr.replace(',', '.'));

      if (!getUserWishesToContinue()) {
        break;
      };
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };

    console.log('');
  };

  return numbersArray;
}

function validateNumber (numberStr) {
  if (!numberStr || isNaN(numberStr.replace(',', '.'))) {
    return false;
  };

  return true;
}

function getUserWishesToContinue () {
  while (true) {
    const userOption = prompt('Deseja inserir outro número? [S/N] ');

    if (validateUserOption(userOption)) {
      if (userOption.trim().toUpperCase() === 'S') {
        return true;
      } else if (userOption.trim().toUpperCase() === 'N') {
        return false;
      }
    } else {
      console.log('Opção inválida, tente novamente.');
    }
  };
};

function validateUserOption (userOption) {
  if (!userOption) {
    return false;
  };

  if (userOption.trim().toUpperCase() !== 'S' && userOption.trim().toUpperCase() !== 'N') {
    return false;
  };

  return true;
};

function getDescendSortArray (numbersArray) {
  const arrayCopy = [...numbersArray];

  return arrayCopy.sort((a, b) => b - a)
};

function formatArray (array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return array.slice(0, -1).join(', ') + ' e ' + array.slice(-1);
  };
}

// Main code
const numbers = getNumbers();
const descendingSortedNumbers = getDescendSortArray(numbers);
const formattedSortedNumbers = formatArray(descendingSortedNumbers);
const arrayIncludes5 = numbers.includes(5);

if (numbers.length === 1) {
  console.log('\nVocê digitou 1 elemento.');
} else {
  console.log(`\nVocê digitou ${numbers.length} elementos.`);
};

console.log(`Os valores em order descrescente são ${formattedSortedNumbers}.`);

if (arrayIncludes5) {
  console.log('O valor 5 faz parte da lista.\n');
} else {
  console.log('O valor 5 não faz parte da lista.\n');
};

prompt('Aperte Enter para finalizar.');

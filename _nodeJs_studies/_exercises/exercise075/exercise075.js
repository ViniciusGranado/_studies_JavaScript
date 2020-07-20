// Module import
const prompt = require('prompt-sync')();

// Functions
function get4Values () {
  const messages = ['primeiro', 'segundo', 'terceiro', 'quarto'];
  const numbers = [];

  for (let i = 0; i < 4; i++) {
    while (true) {
      const userNumberStr = prompt(`Digite o ${messages[i]} número: `);

      if (validateIntValue(userNumberStr)) {
        numbers.push(+userNumberStr);
        console.log('');
        break;
      } else {
        console.log('Valor inválido, tente novamente.\n');
      };
    };
  }

  return numbers;
}

function validateIntValue (valueStr) {
  if (!valueStr || isNaN(valueStr) || !Number.isInteger(+valueStr)) {
    return false;
  };

  return true;
}

function get9instances (numbersArray) {
  return numbersArray.reduce((acc, cur) => {
    if (cur === 9) {
      return acc + 1;
    };

    return acc;
  }, 0)
}

function getEvenValues (numbersArray) {
  return numbersArray.reduce((acc, cur) => {
    if (cur % 2 === 0 && !acc.includes(cur)) {
      acc.push(cur);
    }

    return acc;
  }, [])
};

// Main code
const fourUserValues = get4Values();

const howMany9Instances = get9instances(fourUserValues);
const first3Index = fourUserValues.indexOf(3);
const evenValues = getEvenValues(fourUserValues)

//
if (howMany9Instances === 0) {
  console.log('O valor 9 não aparece nenhuma vez.')
} else if (howMany9Instances === 1) {
  console.log('O valor 9 aparece 1 vez.')
} else {
  console.log(`O valor 9 aparece ${howMany9Instances} vezes.`);
}
//
if (first3Index === -1) {
  console.log('O valor 3 não aparece nenhuma vez.');
} else {
  console.log(`O valor 3 aparece pela primeira vez na posição ${first3Index + 1}.`);
};
//
if (evenValues === []) {
  console.log('Não houve valores pares digitados.');
} else {
  console.log(`Os valores pares digitados foram: ${evenValues}`);
};

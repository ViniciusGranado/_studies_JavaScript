// Module import
const prompt = require('prompt-sync')();

// Functions
function getExpression (message) {
  while (true) {
    const userExpression = prompt(message);

    if (userExpression) {
      return userExpression.trim();
    } else {
      console.log('Expressão inválida, tente novamente.\n');
    };
  };
}

function validateExpression (expression) {
  let controlVar = 0;

  for (const i of expression) {
    if (i === '(') {
      controlVar++;
    };

    if (i === ')') {
      if (controlVar === 0) {
        controlVar++;
      } else {
        controlVar--;
      }
    };
  };

  return controlVar === 0;
}

// Main code
const expression = getExpression('Digite a expressão matemática à ser analisada: ');

if (validateExpression(expression)) {
  console.log('\nSua expressão é válida.\n');
} else {
  console.log('\nSua expressão não é valida. Verifique os parênteses.\n');
};

prompt('Aperte Enter para finalizar.');

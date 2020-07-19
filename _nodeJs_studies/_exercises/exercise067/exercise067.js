// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntNumber () {
  while (true) {
    console.log('Digite um valor para ver a sua tabuada.');
    const userNumberStr = prompt('Entre um número negativo para sair: ');

    if (validateIntNumberStr(userNumberStr)) {
      return +(userNumberStr);
    } else {
      console.log('\n[ERRO] Valor inválido, tente novamente.\n');
    };
  };
}

function validateIntNumberStr (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr)) {
    return false;
  };

  return true;
}

function showTable (number) {
  console.clear();

  console.log('------------------------------------------');
  console.log(`                TABUADA DO ${number}      `);
  console.log('------------------------------------------\n');

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i.toString().padStart(2, ' ')} = ${number * i}`);
  };

  console.log('');
}

// Main code
console.log('------------------------------------------');
console.log('                  TABUADA                 ');
console.log('------------------------------------------');
console.log('Este programa irá mostrar a tabuada dos numeros que você digitar. \nSe quiser sair, apenas entre com um número negativo.\n');

while (true) {
  const userNumber = getIntNumber();

  if (userNumber < 0) {
    console.log('');
    break;
  };

  showTable(userNumber);
}

prompt('Aperte Enter para encerrar.');
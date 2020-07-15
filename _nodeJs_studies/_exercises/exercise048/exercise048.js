// Module import
const prompt = require('prompt-sync')();

// Main code
console.log('--------------------------------------------');
console.log('              MÚLTIPLOS DE 3                ');
console.log('--------------------------------------------');

console.log('Este programa irá mostrar a soma de todos os números ímpares múltiplos de 3 entre 1 e 500.');
prompt('Aperte Enter para começar: ');

let sumNumbers = 0;
let totalValues = 0;

for (let i = 3; i < 501; i = i + 3) {
  if (i % 2 === 1) {
    sumNumbers += i;
    totalValues++;
  };
};

console.log(`\nA soma de todos os ${totalValues} valores citados é ${sumNumbers}\n`);
prompt('Aperte Enter para finalizar.');

// Module import
const prompt = require('prompt-sync')();

// Main code
console.log('--------------------------------------------------');
console.log('                   NÚMEROS PARES                  ');
console.log('--------------------------------------------------');
prompt('Este programa irá mostrar todos os números pares entre 1 e 50. Aperte enter para começar: ');

console.log('');

for (let i = 2; i < 51; i = i + 2) {
  console.log(i);
};

console.log('');

prompt('Aperte Enter para finalizar.');

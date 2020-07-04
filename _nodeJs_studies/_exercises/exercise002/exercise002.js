const prompt = require('prompt-sync')();

const userName = prompt('Digite o seu nome: ');
console.log(`Bem vindo ${userName}.\n`);

prompt('Aperte Enter para finalizar.');
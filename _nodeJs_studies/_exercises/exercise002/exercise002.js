const readlineSync = require('readline-sync');

const userName = readlineSync.question('Digite o seu nome: ');
console.log(`Bem vindo ${userName}.\n`);

readlineSync.question('Aperte Enter para finalizar.');
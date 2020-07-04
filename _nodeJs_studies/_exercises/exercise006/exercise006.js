// Package import
const prompt = require('prompt-sync')();

// Functions
function getNumber() {
    do{
        const userNumberStr = Number(prompt('Digite um número: ').replace(',', '.'));

        if(isNaN(userNumberStr)) {
            console.log('Valor inválido. Tente novamente.\n');
        }else{
            return(userNumberStr);
        };
    }while(true);
}


// Main Code
const userNumber = getNumber();

console.log(`\nO dobro de ${userNumber} é ${userNumber*2}.`);
console.log(`O triplo de ${userNumber} é ${userNumber*3}.`);
console.log(`A raiz quadrada de ${userNumber} é ${Math.sqrt(userNumber)}.`);

prompt('\nAperte Enter para finalizar.')

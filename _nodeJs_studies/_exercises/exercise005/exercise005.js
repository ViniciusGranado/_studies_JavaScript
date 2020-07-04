const prompt = require('prompt-sync')();


// Functions
function getNumber() {
    do{
        const userNumberStr = Number(prompt('Digite um número: ').replace(',', '.'));

        if(isNaN(userNumberStr)) {
            console.log('Valor inválido, tente novamente.\n');
        }else {
            return(userNumberStr);
        }
    }while(true);
}

// Main code
const userNumber = getNumber();

console.log(`\nO antecessor de ${String(userNumber).replace('.', ',')} é ${userNumber + 1}`);
console.log(`O sucessor de ${String(userNumber).replace('.', ',')} é ${userNumber - 1}`);

prompt('\nAperte Enter para finalizar.');

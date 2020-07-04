// Package import
const prompt = require('prompt-sync')();


// Functions
const getNumber = (msgIndex) => {
    const message = ['Digite o primeiro número: ', 'Digite o segundo número: '];

    do{
        const userNumberStr = Number(prompt(message[msgIndex]));

        if(isNaN(userNumberStr)) {
            console.log('Valor inválido, tente novamente.\n');
        }else{
            return(userNumberStr);
        };

    }while(true);
}


// Main code
const number1 = getNumber(0);
const number2 = getNumber(1);

console.log(`\nA média aritmética de ${number1} e ${number2} é ${(number1 + number2) / 2}.`);

prompt('Aperte Enter para finalizar.')

const prompt = require('prompt-sync')();

function getAndValidateNumber(msgIndex) {
    const message = ['Digite o primeiro número: ', 'Digite o segundo número: ']

    do {
        const userNumber = Number(prompt(message[msgIndex]).replace(',', '.'));
        if(isNaN(userNumber)){
            console.log('Valor inválido, tente novamente.\n')
        }else {
            return userNumber
        }
    }while(true)
}

console.log('----SOMANDO DOIS NÚMEROS----\n');

const number1 = getAndValidateNumber(0);
const number2 = getAndValidateNumber(1);

console.log(`\nA soma de ${String(number1).replace('.', ',')} e ${String(number2).replace('.', ',')} é ${String(number1+number2).replace('.', ',')}`);
prompt('\nAperte Enter para finalizar.');
// Module import
const prompt = require('prompt-sync')();


// Functions
function getValue() {
    do {
        const userNumberStr = prompt('Digite um número real: ');

        if (!userNumberStr) {
            console.log('Valor inválido, tente novamente.\n');
            continue;
        } else {
            const convertedUserNumber = Number(userNumberStr.replace(',', '.'));

            if (isNaN(convertedUserNumber)) {
                console.log('Valor inválido, tente novamente.\n');
                continue;
            } else {
                return convertedUserNumber;
            };
        };
    } while (true);
}


// Main code
const userNumber = getValue();
const integerNumber = parseInt(userNumber);
const formattedUserNumber = userNumber.toString().replace('.', ',');

console.log(`O valor digitado foi ${formattedUserNumber} e a sua porção inteira é ${integerNumber}.`);

prompt('Aperte Enter para finalizar.');

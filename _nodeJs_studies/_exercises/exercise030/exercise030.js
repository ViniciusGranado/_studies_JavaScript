// Main code
const prompt = require('prompt-sync')();


// Function
const getNumber = () => {
    while (true) {
        const userNumberStr = prompt('Digite um número: ');

        if (!validateNumber(userNumberStr)) {
            console.log('Valor inválido, tente novamente.\n');
        } else {
            const convertedNumber = Number(userNumberStr.trim().replace(',', '.'));
        
            if (!Number.isInteger(convertedNumber)) {
                console.log('Apenas números inteiros possuem a classificação "Par" ou "Ímpar"\n.');
                continue;
            } else {
                return convertedNumber;
            }
        };
    };
}


const validateNumber = (numberStr) => {
    if (!numberStr) {
        return false
    };

    if(isNaN(Number(numberStr.trim().replace(',', '.')))) {
        return false;
    };

    return true;
}


const checkIsEven = (value) => {
    return value % 2 == 0;
}


// Main code
console.log('---------- PAR OU ÍMPAR? ----------\n');

const userNumber = getNumber();
const numberIsEven = checkIsEven(userNumber);

if (numberIsEven) {
    console.log(`\nO número ${userNumber} é PAR.\n`);
} else {
    console.log(`\nO número ${userNumber} é ÍMPAR.\n`);
};

prompt('Aperte Enter para finalizar.');

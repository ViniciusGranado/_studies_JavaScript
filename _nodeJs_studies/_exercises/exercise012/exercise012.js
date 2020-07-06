// Module import
const prompt = require('prompt-sync')();


// Functions
const getValue = (message) => {
    do {
        const userValue = prompt(message).replace(',', '.');

        if (!validateNumber(userValue)) {
            console.log('Valor inválido, tente novamente.\n');
        } else {

            if ( message.includes('desconto') && Number(userValue) > 100 ) {
                console.log('O desconto não pode ser superior a 100%.');
            };

            return Number(userValue);
        };
    } while (true);

}


const validateNumber = (value) => {
    if (!value) {
        return false;
    };

    const convertedValue = Number(value);
    if ( isNaN(convertedValue) || convertedValue < 0 ) {
        return false;
    };

    return true;
}


const showResult = (product, discount) => {
    const newProductValue = product - (product * discount / 100);

    const formattedProduct = product.toFixed(2).replace('.', ',');
    const formattedNewProductValue = newProductValue.toFixed(2).replace('.', ',');


    console.log(`O produto que custava R$${formattedProduct}, na promoção com desconto de ${discount}% irá custar R$${formattedNewProductValue}.`);
}


// Main code
console.log('----------CALCULADORA DE DESCONTOS----------\n')

const productValue = getValue('Qual é o valor do produto? R$');
const discountValue = getValue('Qual a porcentagem de desconto? %');

showResult(productValue, discountValue);

prompt('Aperte Enter para finalizar.');

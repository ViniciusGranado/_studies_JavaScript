// Module import
const prompt = require('prompt-sync')();


// Functions
const getNumber = (msgIndex) => {
    const message = ['Digite a cotação do Dolar de hoje: R$', 'Quantos Reais você tem na carteira? R$'];

    do {
        const userNumberStr = parseFloat(prompt(message[msgIndex]).replace(',', '.'));

        if(isNaN(userNumberStr)) {
            console.log('Valor inválido, tente novamente.\n');
        }else {
            return(userNumberStr);
        }

    }while(true);
}


// Main code
console.log('-------------------------');
console.log('    COTAÇÃO DO DOLAR     ');
console.log('-------------------------');
console.log();

const dollarQuote = getNumber(0);
const userMoney = getNumber(1);

const howMuchUserCanBuy = userMoney / dollarQuote;

console.log(`\nCom R$${userMoney.toFixed(2)} você pode comprar U$${howMuchUserCanBuy.toFixed(2)}.\n`)

prompt('Aperte Enter para finalizar.')

// Module import
const prompt = require('prompt-sync')();


// Functions
function getVelocity () {
    while (true) {
        const userVelocityStr = prompt('Qual é a velocidade atual do carro em Km/h? ');

        if (validateVelocity(userVelocityStr)) {
            return Number(userVelocityStr.trim());
        } else {
            console.log('Valor inválido, tente novamente.\n');
        };
    };
}


function validateVelocity(velocity) {
    if (!velocity) {
        return false;
    };
    
    const convertedVelocity = Number(velocity.trim());

    if (isNaN(convertedVelocity)) {
        return false;
    };
    if (convertedVelocity < 0) {
        return false;
    };
    
    return true;
}


// Main code;
const userVelocity = getVelocity();

if (userVelocity > 80) {
    console.log('\nMULTADO! Você excedeu o limite permitido que é de 80Km/h.');
    
    const ticketPrice = (userVelocity - 80) * 7;
    console.log(`Você deve pagar uma multa de R$${ticketPrice.toFixed(2).toString().replace('.', ',')}!\n`)
}

console.log('Tenha um bom dia! Dirija com segurança!\n');

prompt('Aperte Enter para finalizar.')

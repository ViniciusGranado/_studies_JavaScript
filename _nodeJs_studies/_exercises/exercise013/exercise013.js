// Module import
const prompt = require('prompt-sync')();


// Functions
function getValue(message, valueIsPercentage=false) {
    do {
        const userSalaryStr = prompt(message);

        if (!userSalaryStr) {
            console.log('Valor inválido, tente novamente.\n');
            continue;
        } else {

            const convertedUserSalary = Number(userSalaryStr.replace(',', '.'));

            if (isNaN(convertedUserSalary)) {
                console.log('Valor inválido, tente novamente.\n')
                continue;
            };
            if (convertedUserSalary == 0) {
                console.log('O valor não pode ser 0.');
                continue;
            }

            if ( valueIsPercentage && Math.abs(convertedUserSalary) > 100 ) {
                console.log('Não é possível utilizar um valor superior a 100%.\n')
                continue;
            };

            return convertedUserSalary;
        }

    } while (true);
}


function showResult(salary, adjustmentRate) {

    const adjustment = salary*adjustmentRate/100;
    const newSalary = salary + adjustment;
    
    const formattedAdjustment = formattedCurrency(adjustment);
    const formattedSalary = formattedCurrency(salary);
    const formattedNewSalary = formattedCurrency(newSalary);
    let message;
    
    if (adjustmentRate > 0) {
        message = 'um aumento'
    } else {
        message = 'uma redução'
    }

    console.log(`\nSalário anterior: R$${formattedSalary}.`);
    console.log(`Com ${message} de R$${formattedAdjustment}, o novo salário será R$${formattedNewSalary}\n`);
}


function formattedCurrency(value) {
    return value.toFixed(2).replace(',', '.');
}
// Main code
const userSalary = getValue('Qual e o salário do funcionário? R$');
const userAdjustment = getValue('Qual será a porcentagem do reajuste: %', true);

showResult(userSalary, userAdjustment);

prompt('Aperte Enter para finalizar.');

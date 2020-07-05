// Package import
const prompt = require('prompt-sync')();


// Functions
function showHeading() {
    // Shows the program heading.

    console.log('--------------------------');
    console.log('   Conversor de medidas   ');
    console.log('--------------------------');
}


function showMenu() {
    // Shows the option menu.

    console.log('\n[1] Milímetros');
    console.log('[2] Centímetros');
    console.log('[3] Decímetros');
    console.log('[4] Metros');
    console.log('[5] Decâmetros');
    console.log('[6] Hectômetros');
    console.log('[7] Kilômetros\n');
}


function getNumber() {
    // Get user input, validate it, and return it if it's a numerical value.

    do {
        console.log('')
        const userNumberStr = Number(prompt('Digite agora o valor à ser convertido: ').replace(',', '.'));

        if(isNaN(userNumberStr)) {
            console.log('Valor inválido, tente novamente.');
        }else {
            return(userNumberStr);
        }
    }while(true);
}


function getOption() {
    // Get user input, validate it, and return it if it's a valid menu option
    do {
        const userOptionStr = Number(prompt('Selecione a sua opção: '));

        if(isNaN(userOptionStr) || !(0 < userOptionStr && userOptionStr < 8)) {
            console.log('Opção inválida, tente novamente.\n');
        }else{
            return(userOptionStr);
        }
    }while(true);
};


function convertUnit(value, conversionRate) {
    // Convert a value using the given conversion rate
    return(value*conversionRate);
}


function getUnitSymbol(unit) {
    // Returns a unit symbol corresponding to the passed unit. 
    switch(unit) {
        case 1:
            return 'mm';

        case 2:
            return 'cm';

        case 3:
            return 'dc';

        case 4:
            return 'm';

        case 5:
            return 'dam';

        case 6:
            return 'hm';

        case 7:
            return 'km';

        default:
            console.log('Ocorreu um erro, tente novamente.')
    }
}


function showFinalResult(convertedUnit, convertingUnit, userValue, finalValue) {
    // Shows the final result.
    const convertedSymbol = getUnitSymbol(convertedUnit);
    const convertingSymbol = getUnitSymbol(convertingUnit);

    console.clear();

    console.log('--------------------------');
    console.log('        Resultado         ');
    console.log('--------------------------');

    console.log(`\n${userValue}${convertedSymbol} é equivalente à ${finalValue}${convertingSymbol}.`);
}


function getContinueOption() {
    // Get user input, validade it, and return it if it's a valid continue option.
    do {
        console.log('');
        const continueOption = (prompt('Deseja realizar outra conversão? [S/N]: ')).toUpperCase();

        if(continueOption != 'S' && continueOption != 'N') {
            console.log('Opção inválida.');
        }else {
            return(continueOption);
        };
    }while(true);
}

// Main code
do {
    showHeading();
    console.log('Selecione abaixo a unidade que deseja converter:');
    showMenu();
    const convertedUnit = getOption();
    const userValue = getNumber();

    console.clear();
    showHeading();
    console.log('Por fim, selecione abaixo para qual unidade o valor será convertido: ');
    showMenu();
    const convertingUnit = getOption();

    const finalValue = convertUnit(userValue, 10 ** (convertedUnit - convertingUnit));
    console.log(finalValue);

    showFinalResult(convertedUnit, convertingUnit, userValue, finalValue);

    const continueOption = getContinueOption();

    if(continueOption == 'N') {
        break;
    };

    console.clear();
}while(true);

console.log('\nFinalizando...');
setTimeout(() => { console.log(''); }, 2000);

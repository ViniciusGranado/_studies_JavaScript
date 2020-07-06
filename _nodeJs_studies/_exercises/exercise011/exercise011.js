// Module import
const prompt = require('prompt-sync')();


// Functions
const askUserValue = (msgIndex) => {
    const message = ['Digite a largura da parede: ', 'Digite a altura da parede: '];

    do {
        const userValue = prompt(message[msgIndex]).replace(',', '.');

        if (!userValue) {
            console.log('Valor inválido, tente novamente.\n');
            continue;
        } else {
            const convertedUserValue = Number(userValue);

            if (!validateNumber(convertedUserValue)) {
                console.log('Valor inválido, tente novamente.\n');
                continue;
            } else {
                return convertedUserValue;
            };
        };
    } while (true);
}

const validateNumber = (value) => {
    return !isNaN(value) && value>=0;
}


const showResult = (width, height) => {
    const wallArea = width * height;
    const amountOfPaint = wallArea / 2;

    console.log(`\nSua parede tem a dimensão ${width}m x ${height}m e sua área é de ${wallArea}m².`);
    console.log(`Para pintar essa parede, você precisará de ${amountOfPaint} litros de tinta.\n`);
}


// Main code
const wallWidth = askUserValue(0);
const wallHeight = askUserValue(1);

showResult(wallWidth, wallHeight);

prompt('Aperte Enter para finalizar.');

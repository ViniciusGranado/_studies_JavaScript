// Module import
const prompt = require('prompt-sync')();


// Functions
const getName = () => {
    while (true) {
        const nameStr = prompt('Digite o seu nome completo: ');

        if (!nameStr) {
            console.log('Digite um nome válido.\n');
            continue;
        } else {
            return nameStr.trim();
        };
    };
}


const formatName = (nameArray) => {
    let formattedName = '';

    for (let i in nameArray) {
        if (i == nameArray.length - 1) {
            formattedName += nameArray[i][0].toUpperCase() + nameArray[i].slice(1).toLowerCase();
        } else {
            formattedName += nameArray[i][0].toUpperCase() + nameArray[i].slice(1).toLowerCase() + ' ';
        };
    };

    return formattedName;
}


const checkIfSilvaInName = (nameArray) => {
    for (let i of nameArray) {
        if (i.toLowerCase() === 'silva') {
            return true
        };
    };

    return false;
}


// Main code
const userName = getName();
const nameArray = userName.split(/\s+/);
const formattedName = formatName(nameArray);
const thereIsSilvaInName = checkIfSilvaInName(nameArray);

if (thereIsSilvaInName) {
    console.log(`\nO seu nome, "${formattedName}", possui "Silva".\n`);
} else {
    console.log(`\nO seu nome, "${formattedName}", não possui "Silva".\n`)
};

prompt('Aperte Enter para finalizar.');

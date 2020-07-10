// Module import
const prompt = require('prompt-sync')();


// Functions
const getString = () => {
    while (true) {
        const userStr = prompt('Digite uma frase: ');

        if (!userStr) {
            console.log('Valor inválido, tente novamente.\n');
        } else {
            console.log('');
            return userStr.trim().toLowerCase();
        };
    };
}


const getLetter = () => {
    while (true) {
        const userLetter = prompt('Digite uma letra: ');

        if (!userLetter) {
            console.log('Valor inválido, tente novamente.\n');
        } else {
            if (userLetter.trim().length > 1) {
                console.log('Digite apenas uma letra.\n');
            } else {
                console.log('');
                return userLetter.trim().toLowerCase();
            };
        };
    };
}


const formatSentence = (sentence) => {
    return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
}


// Main code
const sentence = getString();
const letter = getLetter();
const formattedSentence = formatSentence(sentence);

const firstPosition = sentence.indexOf(letter) + 1;
const lastPosition = sentence.lastIndexOf(letter) + 1;
const numberOccurrences = (sentence.match(new RegExp(letter, 'g')) || []).length;


console.log(`Analisando a frase "${formattedSentence}".`);

if (numberOccurrences === 0) {
    console.log(`A letra "${letter.toUpperCase()}" não aparece na frase.`);
} else {
    if (numberOccurrences === 1) {
        console.log(`A letra "${letter.toUpperCase()}" aparece 1 vez na frase.`);
    } else {
        console.log(`A letra "${letter.toUpperCase()}" aparece ${numberOccurrences} vezes na frase.`);
    };

    console.log(`A primeira letra "${letter.toUpperCase()}" aparece na posição ${firstPosition}.`);
    console.log(`A última letra "${letter.toUpperCase()}" aparece na posição ${lastPosition}.`);
};

console.log('');
prompt('Aperte Enter para finalizar.');

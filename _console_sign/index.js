const prompt = require('prompt-sync')();
const letters = require('./letters');
const sign = require('./sign');

function getMessageArray (sentence) {
  const message = ['', '', '', '', ''];

  for (let char of sentence) {
    let currentLetter;

    switch (char) {
      case 'A':
        currentLetter = letters.letterA;
        break;
      case 'B':
        currentLetter = letters.letterB;
        break;
      case 'C':
        currentLetter = letters.letterC;
        break;
      case 'D':
        currentLetter = letters.letterD;
        break;
      case 'E':
        currentLetter = letters.letterE;
        break;
      case "T":
        currentLetter = letters.letterT;
        break;
      case ' ':
        currentLetter = letters.space;
        break;
    };

    for (let i = 0; i < 5; i++) {
      message[i] += currentLetter[i];
    };
  };

  return message;
}

function bigPrint(sentence) {
  console.clear();
  const message = getMessageArray(sentence.toUpperCase());

  sign.sign(message);
};

bigPrint(prompt('Digite a sua mensagem: '));

console.log('')
prompt('Aperte Enter para finalizar.');

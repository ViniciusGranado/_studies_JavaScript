const prompt = require('prompt-sync')();

function getMenuOption () {
  while (true) {
    const option = prompt('Digite a sua opção: ');

    if (checkIfOptionIsValid(option)) {
      return +option;
    } else {
      console.log('Opção inválida, tente novamente.');
    };
  };
}

function checkIfOptionIsValid (option) {
  if (!option) { return false };
  if (isNaN(option) || !Number.isInteger(+option)) { return false };
  if (+option < 1 || +option > 3) { return false };

  return true;
}

function getText(message) {
  while (true) {
    const text = prompt(message);

    if (text) {
      return text;
    } else {
      console.log('Ocorreu um erro inesperado, tente novamente.\n');
    }
  }
}

function getKey(message) {
  while (true) {
    const key = prompt(message);

    if (validateKey(key)) {
      return key;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    }
  }
}

function validateKey (key) {
  if (!key) { return false };
  if (isNaN(key) || !Number.isInteger(+key)) { return false };

  return true;
}

function manageText (textData) {
  let newSentence = '';
  const key = textData.key % 26;

  for (const ch of textData.originalSentence) {
    const chAsciiCode = ch.charCodeAt(0);

    if ((chAsciiCode >= 65 && chAsciiCode <= 90) || (chAsciiCode >= 97 && chAsciiCode <= 122)) {
      let newChar;
      if (textData.option === 1) {
        // Encrypt text
        newChar = getNewChar(chAsciiCode + key, ch);
      } else if (textData.option === 2) {
        // Decrypt text
        newChar = getNewChar(chAsciiCode - key, ch);
      };

      newSentence += String.fromCharCode(newChar);
    } else {
      newSentence += ch;
    };
  };

  return newSentence;
}

function getNewChar(asciiValue, oldChar) {
  if (oldChar === oldChar.toUpperCase()) {
    if (asciiValue < 65) { return asciiValue + 26 }
    else if (asciiValue > 90) { return asciiValue - 26 }
    else { return asciiValue }
  } else {
    if (asciiValue < 97) { return asciiValue + 26 }
    else if (asciiValue > 122) { return asciiValue - 26 }
    else { return asciiValue}
  };
}

module.exports = {
  getMenuOption,
  getKey,
  getText,
  manageText
}
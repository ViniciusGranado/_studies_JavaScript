const prompt = require('prompt-sync')();
const data = require('../data');

function formatHeading (message) {
  console.log('-'.repeat(message.length + 8));
  console.log(' '.repeat(4) + message + ' '.repeat(4));
  console.log('-'.repeat(message.length + 8));
}

function showHome () {
  formatHeading('CIFRA DE CESAR');

  console.log('A cifra de cesar é uma técnica para encriptar textos, utilizando uma chave de deslocamento.\nSelecione abaixo se deseja encriptar ou decriptar um texto, ou selecione "Sobre" para\nconhecer mais sobre a cifra.');

  console.log('----------------------');

}

function showMenu () {
  console.log('[1] Encriptar');
  console.log('[2] Decriptar');
  console.log('[3] Sobre a Cifra de César');
  console.log('----------------------');
}

function showEncryptMenu (option) {
  console.clear();

  formatHeading('ENCRIPTAÇÃO');
  console.log();

  const textData = {
    originalSentence: data.getText('Digite o texto que deseja encriptar: '),
    key: data.getKey('Digite a chave de deslocamento: '),
    option: option
  }

  textData.newSentence = data.manageText(textData);

  console.clear();

  formatHeading('TEXTO ORIGINAL');
  console.log(textData.originalSentence + '\n');

  formatHeading('TEXTO ENCRIPTADO');
  console.log(textData.newSentence + '\n');

  prompt('Aperte Enter para voltar ao menu principal.');
}

function showDecryptMenu (option) {
  console.clear();

  formatHeading('DECRIPTAÇÃO');
  console.log();

  const textData = {
    originalSentence: data.getText('Digite o texto que deseja decriptar: '),
    key: data.getKey('Digite a chave de deslocamento: '),
    option: option
  }

  textData.newSentence = data.manageText(textData);

  console.clear();

  formatHeading('TEXTO ENCRIPTADO');
  console.log(textData.originalSentence + '\n');

  formatHeading('TEXTO DECRIPTADO');
  console.log(textData.newSentence + '\n');

  prompt('Aperte Enter para voltar ao menu principal.');
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

module.exports = {
  formatHeading,
  showHome,
  showMenu,
  showEncryptMenu,
  showDecryptMenu,
  sleep
};

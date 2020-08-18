const prompt = require('prompt-sync')();
const data = require('../data');

function formatHeading (message) {
  console.log('-'.repeat(message.length + 8));
  console.log(' '.repeat(4) + message + ' '.repeat(4));
  console.log('-'.repeat(message.length + 8));
}

function showHome () {
  formatHeading('CIFRA DE CESAR');

  console.log('A cifra de cesar é uma técnica para encriptar textos,\nutilizando uma chave de deslocamento.\nSelecione abaixo se deseja encriptar ou decriptar um texto,\nou selecione "Sobre" para conhecer mais sobre a cifra.');

  console.log('----------------------');

}

function showMenu () {
  console.log('[1] Encriptar');
  console.log('[2] Decriptar');
  console.log('[3] Sobre a Cifra de César');
  console.log('[4] Sair')
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

function showAboutArea () {
  console.clear();

  formatHeading('Sobre a Cifra de Cesar');

  console.log('\nA Cifra de César, também conhecida como cifra de troca ou código de César,\né uma das mais simples e conhecidas técnicas de criptografia. É um tipo de\ncifra de substituição na qual cada letra do texto é substituída por outra,\nque se apresenta no alfabeto abaixo dela um número fixo de vezes, numero\neste que é chamado de "chave". Por exemplo, com uma troca de três posições,\nA seria substituído por D, B se tornaria E, e assim por diante. O nome do\nmétodo é em homenagem a Júlio César, que o usou para se comunicar com os\nseus generais.\n')
  prompt('Aperte Enter para voltar para o menu principal.');
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
  showAboutArea,
  sleep
};

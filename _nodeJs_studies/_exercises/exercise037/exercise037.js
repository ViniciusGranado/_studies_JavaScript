// Module import
const prompt = require('prompt-sync')();

// Functions
function getNumber (message) {
  while (true) {
    const userValueStr = prompt(message);

    if (validateNumber(userValueStr)) {
      return Number(userValueStr.trim().replace(',', '.'));
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateNumber (value) {
  if (!value) {
    return false
  };

  const convertedValue = Number(value.trim().replace(',', '.'));

  if (isNaN(convertedValue)) {
    return false;
  };

  return true;
}

function getOption (message) {
  while (true) {
    const userOptionStr = prompt(message);

    if (validateOption(userOptionStr)) {
      return Number(userOptionStr);
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateOption (option) {
  if (!option) {
    return false;
  };

  const convertedOption = Number(option);

  if (isNaN(convertedOption)) {
    return false;
  };
  if (convertedOption < 1 || convertedOption > 3) {
    return false;
  };

  return true;
}

function showMenu () {
  console.log('\nEscolha uma das bases para conversão: ');
  console.log('[ 1 ] Converter para BINÁRIO');
  console.log('[ 2 ] Converter para OCTAL');
  console.log('[ 3 ] Converter para HEXADECIMAL');
}

function showResult (decValue, userOption) {
  let result;

  switch (userOption) {
    case 1:
      result = convertDecToBin(decValue);
      console.log(`\n${decValue} convertido para BINÁRIO é igual a ${result}.\n`);
      break;
    case 2:
      result = convertDecToOct(decValue);
      console.log(`\n${decValue} convertido para OCTAL é igual a ${result}.\n`);
      break;
    case 3:
      result = convertDecToHex(decValue);
      console.log(`\n${decValue} convertido para HEXADECIMAL é igual a ${result}.\n`);
      break;
    default:
      console.log('Ocorreu um erro inesperado.');
  };
}

function convertDecToBin (decValue) {
  return (decValue >>> 0).toString(2);
}

function convertDecToOct (decValue) {
  return (decValue >>> 0).toString(8);
}

function convertDecToHex (decValue) {
  return (decValue >>> 0).toString(16);
}

// Main code
const userDecValue = getNumber('Digite um número inteiro: ');

showMenu();

const userOption = getOption('Sua opção: ');

showResult(userDecValue, userOption)

prompt('Aperte Enter para finalizar.')

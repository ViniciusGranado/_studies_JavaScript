/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function showHeading () {
  console.log('=========== LOJAS GUANABARA ============\n');
}

function showMenu () {
  console.log('FORMAS DE PAGAMENTO');
  console.log('[1] à vista no dinheiro');
  console.log('[2] à vista no cartão');
  console.log('[3] 2x no cartão');
  console.log('[4] 3x ou mais no cartão');
}

function getProductPrice () {
  while (true) {
    const productPriceStr = prompt('Preço das compras: R$');

    if (validatePrice(productPriceStr)) {
      return +productPriceStr.replace(',', '.');
    } else {
      console.clear();
      showHeading();
      console.log('Valor inválido, tente novamente.\n');
    }
  }
}

function validatePrice (priceStr) {
  if (!priceStr) {
    return false;
  };

  if (isNaN(priceStr.replace(',', '.')) || +priceStr.replace(',', '.') < 0) {
    return false;
  };

  return true;
}

function getUserOption () {
  while (true) {
    showMenu();

    const userOptionStr = prompt('Seleciona uma opção: ');

    if (validateUserOption(userOptionStr)) {
      return +userOptionStr;
    } else {
      console.clear();
      showHeading();
      console.log('Opção inválida. Tente novamente.\n');
    };
  };
}

function validateUserOption (optionStr) {
  if (!optionStr) {
    return false;
  };

  if (isNaN(optionStr) || +optionStr < 1 || +optionStr > 4) {
    return false;
  };

  return true;
};

function getInstallments () {
  while (true) {
    const installmentsStr = prompt('Número de parcelas: ');

    if (validateInstallments(installmentsStr)) {
      return +installmentsStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  }
}

function validateInstallments (installmentsStr) {
  if (!installmentsStr) {
    return false;
  };

  if (isNaN(installmentsStr) || +installmentsStr < 3) {
    return false;
  };

  return true;
}

function showResult (price, paymentOption, numberInstallments) {
  console.clear();
  showHeading();

  let newPrice;

  switch (paymentOption) {
    case 1:
      newPrice = price - (price * 10 / 100);
      console.log(`Sua compra de R$${price.toFixed(2)} irá custar R$${newPrice.toFixed(2)} com 10% de desconto.\n`);
      break;
    case 2:
      newPrice = price - (price * 5 / 100);
      console.log(`Sua compra de R$${price.toFixed(2)} irá custar R$${newPrice.toFixed(2)} com 5% de desconto.\n`);
      break;
    case 3:
      console.log(`Sua compra de R$${price.toFixed(2)} será parcelada em 2 vezes de R$${price.toFixed(2) / 2} sem juros.\n`);
      break;
    case 4:
      newPrice = price + (price * 20 / 100);
      console.log(`Sua compra será parcelada em ${numberInstallments} vezes de R$${(newPrice / numberInstallments).toFixed(2)} COM JUROS.`);
      console.log(`Sua compra de R$${price.toFixed(2)} irá custar R$${newPrice.toFixed(2)} no final.\n`);
      break;
    default:
      console.log('Ocorreu um erro inesperado.\n');
  };
}

// Main code
showHeading();
const productPrice = getProductPrice();

console.clear();
showHeading();

const userOption = getUserOption();
let numberInstallments = 1;
if (userOption === 4) {
  numberInstallments = getInstallments();
}

showResult(productPrice, userOption, numberInstallments);

prompt('Aperte Enter para finalizar.');

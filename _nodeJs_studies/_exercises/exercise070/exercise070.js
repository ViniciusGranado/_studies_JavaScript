/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function getProduct () {
  const product = {};

  product.name = getProductName();
  product.price = getProductPrice();

  return product;
}

function getProductName () {
  while (true) {
    const productName = prompt('Nome do produto: ');

    if (!productName) {
      console.log('Ocorreu um erre, tente novamente.\n');
    } else {
      return productName[0].toUpperCase() + productName.slice(1).toLowerCase();
    };
  };
}

function getProductPrice () {
  while (true) {
    const productPriceStr = prompt('Preço: R$');

    if (validateProductPriceStr(productPriceStr)) {
      return +productPriceStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente\n');
    };
  };
}

function validateProductPriceStr (priceStr) {
  if (!priceStr) {
    return false;
  };

  if (isNaN(priceStr.replace(',', '.')) || +priceStr.replace(',', '.') < 0) {
    return false;
  };

  return true;
}

function getWishesToContinue () {
  while (true) {
    const userOption = prompt('Deseja continuar? [S/N] ');

    if (validateUserOption(userOption)) {
      if (userOption.trim().toUpperCase() === 'S') {
        return true;
      } else {
        return false;
      };
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateUserOption (option) {
  if (!option) {
    return false;
  };

  if (option.trim().toUpperCase() !== 'S' && option.trim().toUpperCase() !== 'N') {
    return false;
  };

  return true;
}

function getPriceSum (products) {
  return products.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
}

function getTotalProductsCostMoreThan1000 (products) {
  return products.reduce((acc, cur) => {
    if (cur.price > 1000) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

function getCheapestProduct (products) {
  return products.reduce((acc, cur) => {
    if (cur.price < acc.price) {
      return cur;
    }
    return acc;
  }, products[0]);
}
// Main code
console.log('----------------------------------------');
console.log('           LOJA SUPER BARATÃO           ');
console.log('----------------------------------------');

const products = [];

while (true) {
  products.push(getProduct());

  if (!getWishesToContinue()) { break; };

  console.log('-------------------------');
};

const sumProductsPrice = getPriceSum(products);
const howManyCostMoreThan1000 = getTotalProductsCostMoreThan1000(products);
const cheapestProduct = getCheapestProduct(products);

console.log('\n-------------FIM DA COMPRA--------------');
console.log(`O total da compra foi de R$${sumProductsPrice.toFixed(2).replace('.', ',')}.`);

if (howManyCostMoreThan1000 === 0) {
  console.log('Não foram comprados produtos com valor superior à R$1000,00.');
} else if (howManyCostMoreThan1000 === 1) {
  console.log('Foi comprado 1 produto com valor superior à R$1000,00.');
} else {
  console.log(`Foram comprados ${howManyCostMoreThan1000} produtos com valor superior à R$1000,00.`);
}

console.log(`O produto mais barato foi ${cheapestProduct.name} que custou R$${cheapestProduct.price.toFixed(2).replace('.', ',')}.\n`);

prompt('Aperte Enter para finalizar.');

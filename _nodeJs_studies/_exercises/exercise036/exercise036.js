// Module import
const prompt = require('prompt-sync')();

// Functions
function getValue (message) {
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

  if (isNaN(convertedValue) || convertedValue < 0) {
    return false;
  };

  return true;
}

function formatCurrencyBRL (value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// Main code
const houseValue = getValue('Valor da casa: R$');
const userSalary = getValue('Salário do comprador: R$');
const years = getValue('Quantos anos de financiamento: ');

const installmentsValue = houseValue / (years * 12);
const maxInstallment = userSalary * 30 / 100;

const formattedHouseValue = formatCurrencyBRL(houseValue);
const formattedInstallments = formatCurrencyBRL(installmentsValue);

console.log(`\nPara pagar uma casa de ${formattedHouseValue} em ${years} anos, a prestação será de ${formattedInstallments}.`)

if (installmentsValue > maxInstallment) {
  console.log('Empréstimo NEGADO!\n');
} else {
  console.log('Emprestimo pode ser CONCEDIDO!\n')
};

prompt('Aperte Enter para finalizar.');

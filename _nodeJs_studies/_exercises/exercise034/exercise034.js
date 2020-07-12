// Module import
const prompt = require('prompt-sync')();

// Functions
function getSalary () {
  while (true) {
    const userSalaryStr = prompt('Qual é o salário do funcionário? R$');

    if (validateSalary(userSalaryStr)) {
      return Number(userSalaryStr.trim().replace(',', '.'));
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateSalary (salaryStr) {
  if (!salaryStr) {
    return false;
  };
  const convertedSalary = Number(salaryStr.trim().replace(',', '.'));
  if (isNaN(convertedSalary) || convertedSalary < 0) {
    return false;
  };

  return true;
}

function getAdjustment (salary) {
  if (salary > 1250) {
    return salary * 10 / 100;
  } else {
    return salary * 15 / 100;
  }
}

function formatSalary (salary) {
  return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(salary);
}

// Main code
const userSalary = getSalary();
const totalAdjustment = getAdjustment(userSalary);
const newSalary = userSalary + totalAdjustment;
const formattedOldSalary = formatSalary(userSalary);
const formattedNewSalary = formatSalary(newSalary);

console.log(`\nSalário anterior: ${formattedOldSalary}.`)
console.log(`O novo salário será: ${formattedNewSalary}\n`)

prompt('Aperte Enter para finalizar.');

// Module import
const prompt = require('prompt-sync')();

// Functions
function showMenu () {
  console.log('Qual é o seu sexo: ');
  console.log('-------------------');
  console.log('[ 1 ] Masculino');
  console.log('[ 2 ] Feminino');
}

function getOption (message) {
  while (true) {
    const userOptionStr = prompt(message);

    if (validateOption(userOptionStr)) {
      return Number(userOptionStr.trim());
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateOption (option) {
  if (!option) {
    return false;
  };

  const convertedOption = Number(option.trim());
  if (isNaN(convertedOption) || convertedOption < 1 || convertedOption > 2) {
    return false;
  };

  return true;
}

function getBirthYear () {
  while (true) {
    const userBirthStr = prompt('Ano de nascimento: ');

    if (validateBirhtYear(userBirthStr)) {
      return Number(userBirthStr.trim());
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateBirhtYear (birthStr) {
  if (!birthStr) {
    return false;
  };

  const convertedBirth = Number(birthStr.trim());
  if (isNaN(convertedBirth) || !Number.isInteger(convertedBirth) || convertedBirth < 0) {
    return false;
  };

  return true;
}

// Main code
showMenu();
const userOption = getOption('Opção: ');

if (userOption === 2) {
  console.log('\nO serviço militar é obrigatório apenas para cidadãos do sexo masculino.')
  console.log('Caso deseje realizar o serviço militar voluntário, entre em contato com a Junta Militar mais próxima.\n')

} else {
  const userBirthYear = getBirthYear();

  const currentDate = new Date;
  const actualYear = currentDate.getFullYear();
  const userAge = actualYear - userBirthYear;
  console.log(`\nQuem nasceu em ${userBirthYear} tem ${userAge} anos em ${actualYear}.`);

  if (userAge < 18) {
    const yearsToEnlistment = 18 - userAge;
    const enlistmentYear = actualYear + yearsToEnlistment;

    if (yearsToEnlistment === 1) {
      console.log('Ainda falta 1 ano para o alistamento.');
    } else {
      console.log(`Ainda faltam ${yearsToEnlistment} anos para o alistamento.`);
    };
    console.log(`Seu alistamento será em ${enlistmentYear}.\n`);

  } else if ( userAge > 18) {
    const yearsPassedEnlistment = userAge -18;
    const enlistmentYear = actualYear - yearsPassedEnlistment;

    if (yearsPassedEnlistment === 1) {
      console.log('Você já deveria ter se alistado há 1 ano.');
    } else {
      console.log(`Você já deveria ter se alistado há ${userAge - 18} anos.`);
    };
    console.log(`Seu alistamento foi em ${enlistmentYear}.\n`);

  } else {
    console.log('Você deve se alistar IMEDIATAMENTE.\n');
  };
};

prompt('Aperte Enter para finalizar.')

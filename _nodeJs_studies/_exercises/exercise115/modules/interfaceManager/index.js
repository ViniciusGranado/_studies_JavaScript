const prompt = require('prompt-sync')();
const fileManager = require('../fileManager');
const sleep = require('../sleep');

function heading (message) {
  console.log('-'.repeat(45));
  console.log(' '.repeat((45 - message.length) / 2) + message);
  console.log('-'.repeat(45));
}
function showMenu () {
  heading('MENU PRINCIPAL');

  console.log('1 - Exibir usuários cadastrados');
  console.log('2 - Cadastrar novo usuário');
  console.log('3 - Sair do sistema');
  console.log('-'.repeat(45));
};

function getMenuOption (message) {
  while (true) {
    const userOption = prompt(message);

    try {
      if (userOption === '') throw new Error('Você deve digitar uma opção\n');
      if (!userOption) throw new Error('Ocorreu um erro inesperado\n');
      if (isNaN(userOption) || !Number.isInteger(+userOption)) throw new Error('Valor inválido.\n');
      if (+userOption < 1 || +userOption > 3) throw new Error('Opção inválida. Digite uma opção entre 1 e 3.');

      return +userOption
    } catch (error) {
      console.log(error.message);
    }
  }
}

function showUsersList () {
  console.clear();

  heading('USUÁRIOS CADASTRADOS');

  fileManager.showUsers();
  console.log();

  sleep(2000);
}

function registerNewUser () {
  console.clear();

  heading('NOVO USUÁRIO');

  const newUserName = getName();
  console.log();
  const newUserAge = getAge();
  fileManager.insertUser(newUserName, newUserAge);

  console.log(`\nCadastro de ${newUserName.split(' ')[0]} realizado com sucesso.`);

  sleep(2500);
  console.clear();
}

function getName () {
  while (true) {
    const name = prompt('Nome: ');

    try {
      if (!name) throw new Error('Você deve digitar um nome válido.\n');

      const nameArray = [];

      for (const i of name.split(' ')) {
        const word = i.slice(0, 1).toUpperCase() + i.slice(1).toLowerCase();
        if (word !== '') nameArray.push(word)
      };

      return nameArray.join(' ');
    } catch (error) {
      console.log(error.message);
    };
  };
}

function getAge () {
  while (true) {
    const ageStr = prompt('Idade: ');

    try {
      if (ageStr === '') throw new Error('Você deve digitar um valor.\n');
      if (!ageStr) throw new Error('Ocorreu um erro inesperado\n');
      if (isNaN(ageStr) || !Number.isInteger(+ageStr)) throw new Error('Valor inválido.\n');
      if (+ageStr < 0) throw new Error('Digite um valor positivo.\n');

      return +ageStr;
    } catch (error) {
      console.log(error.message);
    };
  };
}

module.exports = {
  showMenu,
  getMenuOption,
  showUsersList,
  registerNewUser
};

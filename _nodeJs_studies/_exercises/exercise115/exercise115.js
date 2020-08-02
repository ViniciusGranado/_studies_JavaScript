// Module import
const interfaceManager = require('./modules/interfaceManager');
const fileManager = require('./modules/fileManager');

// Main code
fileManager.checkIfFileExists();

while (true) {
  interfaceManager.showMenu();

  const userMenuOption = interfaceManager.getMenuOption('Sua opção: ');

  if (userMenuOption === 3) break
  else if (userMenuOption === 1) {
    interfaceManager.showUsersList()
  } else {
    interfaceManager.registerNewUser();
  };
};

console.log('\nFINALIZANDO...');

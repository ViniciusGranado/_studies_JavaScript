const interface = require('./modules/interface');
const data = require('./modules/data');

while (true) {
  interface.showHome();
  interface.showMenu();

  const menuOption = data.getMenuOption();

  if (menuOption === 1) {
    interface.showEncryptMenu(menuOption);
  } else if (menuOption === 2) {
    interface.showDecryptMenu(menuOption);
  } else {
    break;
  };
  
  console.clear();
}

console.log('\nFinalizando...');
interface.sleep(3000);

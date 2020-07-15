// Module import
const prompt = require('prompt-sync')();

// Functions
function sleep (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function newYearCount () {
  console.log('');
  for (let i = 10; i > 0; i--) {
    console.log(i);
    sleep(1000);
  };

  console.log('\nFELIZ ANO NOVO!!!!!\n')
};

// Main code
console.log('----------------------------------------')
console.log('CONTAGEM REGRESSIVA PARA O ANO NOVO')
console.log('----------------------------------------')
prompt('Aperte Enter para iniciar: ');

newYearCount()

prompt('Aperte Enter para finalizar.');

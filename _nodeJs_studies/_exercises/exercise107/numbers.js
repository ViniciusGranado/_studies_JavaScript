const prompt = require('prompt-sync')();

const numbers = {
  getNumber: (message) => {
    while (true) {
      const valueStr = prompt(message);

      if (numbers.validateNumber(valueStr)) {
        return +valueStr.replace(',', '.');
      } else {
        console.log('Valor inválido, tente novamente.\n');
      };
    };
  },

  validateNumber: (numberStr) => {
    if (!numberStr) {
      return false;
    };

    if (isNaN(numberStr.replace(',', '.')) || +numberStr.replace(',', '.') < 0) {
      return false;
    };

    return true;
  }
};

module.exports = numbers;

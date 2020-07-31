const currency = {
  increaseNPercent: (value, N, format = false) => {
    const answer = value + (value * N) / 100;

    if (format) {
      return currency.formatCurrency(answer);
    } else {
      return answer;
    }
  },

  decreaseNPercent: (value, N, format = false) => {
    const answer = value - (value * N) / 100;
    if (format) {
      return currency.formatCurrency(answer);
    } else {
      return answer;
    }
  },

  double: (value, format = false) => {
    const answer = value * 2;
    if (format) {
      return currency.formatCurrency(answer);
    } else {
      return answer;
    };
  },

  half: (value, format = false) => {
    const answer = value / 2;
    if (format) {
      return currency.formatCurrency(answer);
    } else {
      return answer;
    };
  },

  formatCurrency: (value, currency='R$') => currency + value.toFixed(2).replace('.', ','),

  resume: (value, increase, decrease) => {
    console.log('-'.repeat(35));
    console.log('         RESUMO DO VALOR');
    console.log('-'.repeat(35));

    console.log('Valor analisado:'.padEnd(25) + currency.formatCurrency(value));
    console.log('Dobro do valor:'.padEnd(25) + currency.double(value, true));
    console.log('Metade do valor: '.padEnd(25) + currency.half(value, true));
    console.log(`${increase}% de aumento: `.padEnd(25) + currency.increaseNPercent(value, increase, true));
    console.log(`${decrease}% de redução: `.padEnd(25) + currency.decreaseNPercent(value, decrease, true));
    console.log('-'.repeat(35));
  }
};

module.exports = currency;

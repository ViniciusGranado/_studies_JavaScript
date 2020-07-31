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

  formatCurrency: (value, currency='R$') => currency + value.toFixed(2).replace('.', ',')
};

module.exports = currency;

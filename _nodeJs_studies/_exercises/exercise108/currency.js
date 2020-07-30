const currency = {
  increaseNPercent: (value, N) => value + (value * N) / 100,
  decreaseNPercent: (value, N) => value - (value * N) / 100,
  double: (value) => value * 2,
  half: (value) => value / 2,
  formatCurrency: (value, currency='R$') => currency + value.toFixed(2).replace('.', ',')
};

module.exports = currency;

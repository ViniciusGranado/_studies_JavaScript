// Module import
const prompt = require('prompt-sync')();

// Functions
function getName (message) {
  return prompt(message).trim();
}

function getPoints (message) {
  while (true) {
    const pointsStr = prompt(message);

    if (validateIntValue(pointsStr)) {
      return +pointsStr;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateIntValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || !Number.isInteger(+valueStr) || +valueStr < 0) {
    return false;
  };

  return true;
}

function record (playerName, playerPoints = 0) {
  if (!playerName) {
    playerName = '<desconhecido>';
  };

  if (playerPoints === 0) {
    console.log(`O jogador ${playerName} não fez gols no campeonato.`);
  } else if (playerPoints === 1) {
    console.log(`O jogador ${playerName} fez 1 gol no campeonato.`);
  } else {
    console.log(`O jogador ${playerName} fez ${playerPoints} gols no campeonato.`);
  };
}

// Main code
const playerName = getName('Nome do jogador: ');
const playerPoints = getPoints('Número de gols: ');

record(playerName, playerPoints);

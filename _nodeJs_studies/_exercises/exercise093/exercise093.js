// Module import
const prompt = require('prompt-sync')();

// Functions
const getNewPlayer = () => {
  const playerInfo = {};

  playerInfo.name = getName('Nome do jogador: ');
  const totalMatches = getIntPositiveValue(`Quantas partidas ${playerInfo.name} jogou? `);
  playerInfo.score = getScore(totalMatches, playerInfo);
  playerInfo.totalPoints = getTotalPoints(playerInfo);

  return playerInfo;
}

function getName (message) {
  while (true) {
    const userName = prompt(message);

    if (userName) {
      return userName.trim().slice(0, 1).toUpperCase() + userName.trim().slice(1).toLowerCase();
    } else {
      console.log('Ocoreu um erro, tente novamente.\n');
    };
  };
}

function getIntPositiveValue (message) {
  while (true) {
    const valueStr = prompt(message);

    if (validateIntPositiveValue(valueStr)) {
      return +valueStr;
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateIntPositiveValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || +valueStr < 0) {
    return false;
  };

  return true;
}

function getScore (totalMatches, playerInfo) {
  const score = [];
  for (let i = 0; i < totalMatches; i++) {
    score.push(getIntPositiveValue(`${' '.repeat(5)}Quantos gols ${playerInfo.name} fez na partida ${i + 1}? `));
  };

  return score;
}

function getTotalPoints (playerInfo) {
  if (playerInfo.score.length > 0) {
    return playerInfo.score.reduce((acc, cur) => {
      return acc + cur;
    });
  };

  return 0;
}

function showResult (player) {
  console.log('--------------------------------------------------');
  console.log(player);
  console.log('--------------------------------------------------');

  for (const i in player) {
    if (Array.isArray(player[i])) {
      console.log(`O campo ${i} tem o valor [${player[i]}]`);
    } else {
      console.log(`O campo ${i} tem o valor ${player[i]}`);
    };
  };

  console.log('--------------------------------------------------');

  if (player.score.length === 0) {
    console.log(`O jogador ${player.name} não jogou nenhuma partida.`);
  } else if (player.score.length === 1) {
    console.log(`O jogador ${player.name} jogou 1 partida.`);
  } else {
    console.log(`O jogador ${player.name} jogou ${player.score.length} partidas.`);
  }

  for (let i = 0; i < player.score.length; i++) {
    if (player.score[i] === 0) {
      console.log(`${' '.repeat(6)}=> Na partida ${i + 1}, não marcou gols.`);
    } else if (player.score[i] === 1) {
      console.log(`${' '.repeat(6)}=> Na partida ${i + 1}, marcou 1 gol.`);
    } else {
      console.log(`${' '.repeat(6)}=> Na partida ${i + 1}, marcou ${player.score[i]} gols.`);
    };
  };

  if (player.totalPoints === 0) {
    console.log('Não marcou gols em nenhuma partida.');
  } else if (player.totalPoints === 1) {
    console.log('Marcou 1 gol no total.');
  } else {
    console.log(`Marcou ${player.totalPoints} gols no total.`);
  };
}

// Main code
const player = getNewPlayer();
showResult(player);

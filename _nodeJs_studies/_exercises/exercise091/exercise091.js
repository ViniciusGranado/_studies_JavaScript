// Functions
function getRandonIntBetween1and6 () {
  return Math.floor(Math.random() * (7 - 1) + 1);
}

function sortPlayers (playersList) {
  const listCopy = [...playersList];

  listCopy.sort((a, b) => {
    return b.diceNumber - a.diceNumber;
  })
  return listCopy;
}

function showPlayersList (playersList) {
  console.log('Valores sorteados: ');

  for (let i = 0; i < playersList.length; i++) {
    console.log(`${playersList[i].player} tirou ${playersList[i].diceNumber} no dado.`)
  };
}

function showFinalResult (sortedPlayers) {
  console.log('== RANKING DOS JOGADORES ==');

  for (let i = 0; i < sortedPlayers.length; i++) {
    console.log(`${i + 1}° Lugar: ${sortedPlayers[i].player} com ${sortedPlayers[i].diceNumber}`);
  };
}

// Main code
const players = [
  {
    player: 'Jogador1',
    diceNumber: getRandonIntBetween1and6()
  },
  {
    player: 'Jogador2',
    diceNumber: getRandonIntBetween1and6()
  },
  {
    player: 'Jogador3',
    diceNumber: getRandonIntBetween1and6()
  },
  {
    player: 'Jogador4',
    diceNumber: getRandonIntBetween1and6()
  }
];

const sortedPlayersList = sortPlayers(players);

showPlayersList(players);
console.log('----------------------------------------\n');
showFinalResult(sortedPlayersList);

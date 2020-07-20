// Functions
function showFirst5teams (teamsArray) {
  console.log(`Os 5 primeiros são ${teamsArray.slice(0, 6)}`);
};

function showlast4teams (teamsArray) {
  console.log(`Os 4 últimos são ${teamsArray.slice(-4)}`)
}

function showTeamsInAlphabeticalOrder (teamsArray) {
  console.log(`Times em orderm alfabética: ${[...teamsArray].sort()}`)
}

function showChapecoensePosition (teamsArray) {
  console.log(`O chapecoense está na ${teamsArray.indexOf('Chapecoense') + 1}ª posição.`);
}

// Main code
const teams = ['Flamengo', 'Santos', 'Palmeiras', 'Grêmio', 'Athlético-PR', 'São Paulo', 'Internacional', 'Corinthians', 'Fortaleza', 'Goiás', 'Bahia', 'Vasco', 'Athlético-MG', 'Fluminense', 'Botafogo', 'Ceará', 'Cruzeiro', 'CSA', 'Chapecoense', 'Avaí']

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log(`Lista de times do Brasileirão: ${teams}`);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

showFirst5teams(teams);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

showlast4teams(teams);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

showTeamsInAlphabeticalOrder(teams);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

showChapecoensePosition(teams);

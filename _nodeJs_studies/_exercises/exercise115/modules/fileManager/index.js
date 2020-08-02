const fs = require('fs');

const filePath = './exercise115/users.csv';

function checkIfFileExists () {
  if (!fs.existsSync(filePath)) { fs.writeFileSync(filePath, 'user_name,user_age') };
};

function showUsers () {
  const file = fs.readFileSync(filePath, 'utf-8').split(/\n/g);
  if (file.length === 1) {
    console.log('Não há usuários cadastrados.');
  } else {
    for (let i = 1; i < file.length; i++) {
      const userInfo = file[i].split(',');
      console.log(userInfo[0].padEnd(40) + userInfo[1]);
    };
  }
}

function insertUser (name, age) {
  fs.appendFileSync(filePath, `\n${name},${age}`);
}

module.exports = {
  checkIfFileExists,
  showUsers,
  insertUser
};

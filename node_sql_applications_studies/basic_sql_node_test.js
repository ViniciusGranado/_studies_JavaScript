const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Successfully connected!');
}).catch(error => {
  console.log(`Error connecting: ${error}`);
});
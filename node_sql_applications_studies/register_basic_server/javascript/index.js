const express = require('express');
const Sequelize = require('sequelize');
const handlebars =  require('express-handlebars');

const { userInfo } = require('os');
const server = express();


//Config
  //Template Engine
  server.engine('handlebars', handlebars({defaultLayout: 'main'}));
  server.set('view engine', 'handlebars');

  //MySql DB connection
  const sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });


server.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
  console.log('To exit: CTRL + C');
});
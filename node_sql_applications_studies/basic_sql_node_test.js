const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

// Post
const Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
});

Post.sync({force: true});
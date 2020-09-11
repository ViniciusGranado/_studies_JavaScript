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


// User
const User = sequelize.define('users', {
  name: {
    type: Sequelize.STRING  
  },
  surname: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

// Post.sync({force: true});
// User.sync({force: true});

Post.create({
  title: 'Lorem Ipsum Dolor',
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cum tenetur totam harum quo, non nisi laborum ipsam animi!
            Quisquam facilis reiciendis laborum quas aliquam necessitatibus
            neque reprehenderit possimus adipisci totam!`
});

User.create({
  name: 'Vinícius',
  surname: 'Granado',
  age: 25,
  email: 'vinicius.r.granado@gmail.com'
});
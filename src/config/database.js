const Sequelize = require('sequelize');

const sequelize = new Sequelize('projeto_back_end', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
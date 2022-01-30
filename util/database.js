const Sequelize = require('sequelize');
const { DATABASE_PASSWORD } = require('../config');

const sequelize = new Sequelize('myresume', 'root', `${DATABASE_PASSWORD}`, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
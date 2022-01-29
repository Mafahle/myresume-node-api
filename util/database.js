const Sequelize = require('sequelize');
const { DATABASE_PASSWORD } = require('../config');

const sequelize = new Sequelize('myresume', 'postgres', `${DATABASE_PASSWORD}`, {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
const { Sequelize } = require('sequelize');
const sequelize = require('../util/database');

const ContactDeatils = sequelize.define('contactDetails', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  phoneNumber: Sequelize.STRING,
  email: Sequelize.STRING,
  linkedIn: Sequelize.STRING
});

ContactDeatils.sync();

module.exports = ContactDeatils;
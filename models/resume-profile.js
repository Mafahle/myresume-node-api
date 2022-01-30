const { Sequelize } = require('sequelize');
const sequelize = require('../util/database');

const ResumeProfile = sequelize.define('resumeProfile', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  surname: Sequelize.STRING,
  profession: Sequelize.STRING,
  summary: Sequelize.STRING,
  contactDetails: Sequelize.STRING
});

ResumeProfile.sync();

module.exports = ResumeProfile;



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
  contactDetails: Sequelize.JSON,
  skills: Sequelize.JSON,
  languages: Sequelize.JSON,
  experience: Sequelize.JSON,
  education: Sequelize.JSON
});

ResumeProfile.sync({ alter: true });

module.exports = ResumeProfile;



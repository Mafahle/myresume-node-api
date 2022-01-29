const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const ResumeProfile = sequelize.define('ResumeProfile', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: { type: DataTypes.TEXT },
  surname: { type: DataTypes.TEXT },
  email: { type: DataTypes.TEXT }
});

module.exports = ResumeProfile;



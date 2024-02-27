const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const Role = require('./roleModel');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // primaryKey=Уникальный идентификатор
    autoIncrement: true //autoIncrement=Каждый раз будет увеличиваться
  },
  nickname: {
    type: DataTypes.STRING,
    unique: true, // unique=Уникальное значение
    allowNull: false
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  useragreement: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // defaultValue=Устанавливает значение по умолчанию
    allowNull: false
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  activationLink: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: JSON.stringify(["USER"]) // defaultValue=Устанавливает значение по умолчанию
  },
});

// User.belongsToMany(Role, { through: 'role' });

module.exports = User;
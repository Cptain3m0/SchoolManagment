const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Asegúrate de que esta ruta sea correcta

const Curso = sequelize.define('Curso', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = Curso;

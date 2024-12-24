const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_cursos_alumnos', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306  // Si usas otro puerto, cámbialo aquí
});

module.exports = sequelize;

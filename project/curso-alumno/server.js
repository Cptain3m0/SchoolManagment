const express = require('express');
const sequelize = require('./config/database');
const Curso = require('./models/curso');
const Alumno = require('./models/alumno');
const Inscripcion = require('./models/inscripcion');

const app = express();
const port = 3000;

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

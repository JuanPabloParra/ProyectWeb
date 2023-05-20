const mongoose = require('mongoose');

// Establece la conexión con la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/nombre_de_la_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos.');
});

module.exports = db;

const express = require('express');
const mongoose = require('mongoose');
const ChatMessage = require('./models/ChatMessage');

const app = express();
const port = 3001;

app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/chat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos.');
});

// Ruta para obtener los mensajes del chat
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await ChatMessage.find().sort({ createdAt: 'asc' });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes del chat' });
  }
});

// Ruta para enviar un nuevo mensaje al chat
app.post('/api/messages', async (req, res) => {
  try {
    const { message } = req.body;
    const newMessage = new ChatMessage({ message });
    await newMessage.save();
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

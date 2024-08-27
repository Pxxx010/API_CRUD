require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const itemRoutes = require('./routes/itemRoutes');

// Conexão ao MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch((error) => console.error('Erro ao conectar no MongoDB:', error));

// Rotas
app.use('/api/items', itemRoutes);

// Inicializar servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

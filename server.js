require('dotenv').config();

const express = require('express');
const cors = require('cors');

const conectarBanco = require('./src/config/database');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API do Mercadinho no ar!' });
});
app.use('/api/products', productRoutes);


conectarBanco().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});

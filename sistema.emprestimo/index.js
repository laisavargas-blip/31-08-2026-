const express = require('express');
const equipamentoRoutes = require('./routes/equipamento.Routes');

const app = express();

app.use(express.json());

app.use(equipamentoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
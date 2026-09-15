import express from 'express';
import { equipRouter } from './routes/equipamento.Routes.js';


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem-vindo à API de Equipamentos!");
});

app.use("/", equipRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
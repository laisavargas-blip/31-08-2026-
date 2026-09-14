const express = require('express');
const EquipamentoService = require('../services/EquipamentoService');

const router = express.Router();
const service = new EquipamentoService();

// Listar todos os equipamentos
router.get('/equipamentos', async (req, res) => {
    try {
        const equipamentos = await service.listarTodos();

        res.json(equipamentos);
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao listar equipamentos'
        });
    }
});

// Buscar equipamento pelo ID
router.get('/equipamentos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        const equipamento = await service.buscarPorId(id);

        if (!equipamento) {
            return res.status(404).json({
                erro: 'Equipamento não encontrado'
            });
        }

        res.json(equipamento);
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao buscar equipamento'
        });
    }
});

// Cadastrar equipamento
router.post('/equipamentos', async (req, res) => {
    try {
        const {
            nome,
            categoria,
            condicao_uso,
            disponivel
        } = req.body;

        const equipamento = await service.cadastrar(
            nome,
            categoria,
            condicao_uso,
            disponivel
        );

        res.status(201).json(equipamento);
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao cadastrar equipamento'
        });
    }
});

// Alterar disponibilidade
router.patch('/equipamentos/:id/disponibilidade', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { disponivel } = req.body;

        const equipamento = await service.alterarDisponibilidade(
            id,
            disponivel
        );

        if (!equipamento) {
            return res.status(404).json({
                erro: 'Equipamento não encontrado'
            });
        }

        res.json(equipamento);
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao alterar disponibilidade'
        });
    }
});

module.exports = router;
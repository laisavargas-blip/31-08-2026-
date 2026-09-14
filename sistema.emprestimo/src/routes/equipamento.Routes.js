import { Router } from 'express';
import { equipamentoService } from '../services/Equipamento.Service.js';

export const equipRouter = Router();

// Listar todos os equipamentos
equipRouter.get('/equipamentos', async (req, res) => {
    try {
        const equipamentos = await equipamentoService.listarTodos();

        res.json(equipamentos);
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao listar equipamentos'
        });
    }
});

// Buscar equipamento pelo ID
equipRouter.get('/equipamentos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        const equipamento = await equipamentoService.buscarPorId(id);

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
equipRouter.post('/equipamentos', async (req, res) => {
    try {
        const {
            nome,
            categoria,
            condicao_uso,
            disponivel
        } = req.body;

        const equipamento = await equipamentoService.cadastrar(
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
equipRouter.patch('/equipamentos/:id/disponibilidade', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { disponivel } = req.body;

        const equipamento = await equipamentoService.alterarDisponibilidade(
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
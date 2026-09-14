import { pool } from '../database/db.js';

class EquipamentoService {

    async listarTodos() {
        const resultado = await pool.query(
            'SELECT * FROM equipamentos ORDER BY id'
        );

        return resultado.rows;
    }

    async buscarPorId(id) {
        const resultado = await pool.query(
            'SELECT * FROM equipamentos WHERE id = $1',
            [id]
        );

        return resultado.rows[0] || null;
    }

    async cadastrar(nome, categoria, condicao_uso, disponivel) {
        const resultado = await pool.query(
            `INSERT INTO equipamentos 
            (nome, categoria, condicao_uso, disponivel)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [nome, categoria, condicao_uso, disponivel]
        );

        return resultado.rows[0];
    }

    async alterarDisponibilidade(id, disponivel) {
        const resultado = await pool.query(
            `UPDATE equipamentos
            SET disponivel = $1
            WHERE id = $2
            RETURNING *`,
            [disponivel, id]
        );

        return resultado.rows[0] || null;
    }
}

export const equipamentoService = new EquipamentoService();
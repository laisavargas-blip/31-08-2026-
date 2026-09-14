const EquipamentoService = require('./services/Equipamento.Service');

const service = new EquipamentoService();

async function testar() {
    try {
        const equipamento = await service.alterarDisponibilidade(1, false);

        console.log('Disponibilidade alterada:');
        console.log(equipamento);

    } catch (erro) {
        console.error('Erro ao alterar disponibilidade:', erro);
    }
}

testar();
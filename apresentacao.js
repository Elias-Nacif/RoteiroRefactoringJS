// arquivo repositorio.js
const { readFileSync } = require('fs');

var formatarMoeda = require("./util.js");

module.exports = function gerarFaturaStr(fatura, servico) {
    let faturaStr = `Fatura ${fatura.cliente}\n`;
    for (let apre of fatura.apresentacoes) {
        faturaStr += `  ${servico.repo.getPeca(apre).nome}: ${formatarMoeda(servico.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${formatarMoeda(servico.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${servico.calcularTotalCreditos(fatura.apresentacoes)} \n`;
    return faturaStr;
}
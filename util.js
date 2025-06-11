// arquivo repositorio.js
const { readFileSync } = require('fs');

module.exports = function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR",
    {
      style: "currency", currency: "BRL",
      minimumFractionDigits: 2
    }).format(valor / 100);
}
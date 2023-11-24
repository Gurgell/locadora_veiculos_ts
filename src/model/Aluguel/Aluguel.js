"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluguel = void 0;
var Aluguel = /** @class */ (function () {
    function Aluguel(veiculo, cliente) {
        this.veiculo = veiculo;
        this.cliente = cliente;
        this.dataInicio = new Date();
        this.valorHoraContratado = veiculo.valorHora;
        this.id = Aluguel.ultimoId++;
    }
    Aluguel.ultimoId = 1;
    return Aluguel;
}());
exports.Aluguel = Aluguel;

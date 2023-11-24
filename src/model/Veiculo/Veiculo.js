"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, cor, modelo, valorHora) {
        this.placa = placa;
        this.cor = cor;
        this.modelo = modelo;
        this.valorHora = valorHora;
    }
    Veiculo.ultimoId = 1;
    return Veiculo;
}());
exports.Veiculo = Veiculo;

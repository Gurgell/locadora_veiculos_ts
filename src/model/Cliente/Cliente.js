"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoCarteira = exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(cpf, tipoCarteira) {
        this.cpf = cpf;
        this.tipoCarteira = tipoCarteira;
        this.id = 0;
        this.id += Cliente.ultimoId;
        Cliente.ultimoId++;
    }
    Cliente.ultimoId = 1;
    return Cliente;
}());
exports.Cliente = Cliente;
var TipoCarteira;
(function (TipoCarteira) {
    TipoCarteira["A"] = "Moto";
    TipoCarteira["B"] = "Carro";
    TipoCarteira["AB"] = "Moto e carro";
})(TipoCarteira || (exports.TipoCarteira = TipoCarteira = {}));

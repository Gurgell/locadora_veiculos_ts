"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
var Locacao = /** @class */ (function () {
    function Locacao() {
        this.veiculos = new Array;
        this.carros = new Array;
        this.motos = new Array;
        this.clientes = new Array;
        this.alugueis = new Array;
    }
    //crud dos carros
    Locacao.prototype.addVeiculo = function (novoVeiculo) {
        var veiculo = this.veiculos.find(function (veiculo) { return veiculo.placa == novoVeiculo.placa; });
        if (veiculo == undefined)
            this.veiculos.push(novoVeiculo);
        else
            throw new Error("Já existe um veiculo cadastrado com essa placa");
    };
    Locacao.prototype.buscarTodosVeiculos = function () {
        return this.veiculos;
    };
    // addCarro(novoCarro:Carro):void{
    //     const carro:Carro|undefined = this.carros.find(car => car.placa == novoCarro.placa)
    //     if (carro == undefined)
    //         this.carros.push(novoCarro)
    //     else throw new Error("Já existe um carro cadastrado com essa placa")
    // }
    Locacao.prototype.buscarCarroPorPlaca = function (placa) {
        var carro = this.carros.find(function (car) { return car.placa == placa; });
        if (carro != undefined) {
            return carro;
        }
        else {
            throw new Error("Carro não encontrado!");
        }
    };
    Locacao.prototype.buscarCarroPorId = function (id) {
        var carro = this.carros.find(function (car) { return car.id == id; });
        if (carro != undefined) {
            return carro;
        }
        else {
            throw new Error("Carro não encontrado!");
        }
    };
    Locacao.prototype.buscarTodosCarros = function () {
        return this.carros;
    };
    Locacao.prototype.editarCarro = function (carro) {
        var index = this.carros.indexOf(this.buscarCarroPorId(carro.id));
        if (index != -1) {
            if (this.carros[index].placa == carro.placa) {
                this.carros.splice(index, 1, carro);
            }
            else {
                if (this.carros.find(function (car) { return car.placa == carro.placa; }) == undefined) {
                    this.carros.splice(index, 1, carro);
                }
                else
                    throw new Error("Já existe um carro cadastrado com essa placa");
            }
        }
        else
            throw new Error("Carro não encontrado!");
    };
    Locacao.prototype.removerCarro = function (id) {
        var index = this.carros.indexOf(this.buscarCarroPorId(id));
        if (index != -1) {
            this.carros.splice(index);
        }
        else
            throw new Error("Carro não encontrado!");
    };
    //crud dos Motos
    Locacao.prototype.addMoto = function (novaMoto) {
        var moto = this.motos.find(function (m) { return m.placa == novaMoto.placa; });
        if (moto == undefined)
            this.motos.push(novaMoto);
        else
            throw new Error("Já existe uma moto cadastrada com essa placa");
    };
    Locacao.prototype.buscarMotoPorPlaca = function (placa) {
        var moto = this.motos.find(function (m) { return m.placa == placa; });
        if (moto != undefined) {
            return moto;
        }
        else {
            throw new Error("Moto não encontrada!");
        }
    };
    Locacao.prototype.buscarMotoPorId = function (id) {
        var moto = this.motos.find(function (m) { return m.id == id; });
        if (moto != undefined) {
            return moto;
        }
        else {
            throw new Error("Moto não encontrada!");
        }
    };
    Locacao.prototype.buscarTodosMotos = function () {
        return this.motos;
    };
    Locacao.prototype.editarMoto = function (moto) {
        var index = this.motos.indexOf(this.buscarCarroPorId(moto.id));
        if (index != -1) {
            if (this.motos[index].placa == moto.placa) {
                this.motos.splice(index, 1, moto);
            }
            else {
                if (this.motos.find(function (m) { return m.placa == moto.placa; }) == undefined) {
                    this.motos.splice(index, 1, moto);
                }
                else
                    throw new Error("Já existe uma moto cadastrada com essa placa");
            }
        }
        else
            throw new Error("Moto não encontrada!");
    };
    Locacao.prototype.removerMoto = function (id) {
        var index = this.motos.indexOf(this.buscarMotoPorId(id));
        if (index != -1) {
            this.motos.splice(index);
        }
        else
            throw new Error("Moto não encontrada!");
    };
    return Locacao;
}());
exports.Locacao = Locacao;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluguel_1 = require("../model/Aluguel");
var Cliente_1 = require("../model/Cliente");
var Carro_1 = require("../model/Carro");
var Moto_1 = require("../model/Moto");
// class Main{
//     public clientes: Array<Cliente>
//     public alugueis: Array<Aluguel>;
//     public veiculosDisponiveis: Array<Veiculo>;
//     public veiculosAlugados: Array<Veiculo>;
// }
var cliente1 = new Cliente_1.Cliente("19149480766", Cliente_1.TipoCarteira.A);
var cliente2 = new Cliente_1.Cliente("19149480766", Cliente_1.TipoCarteira.B);
console.log(cliente1);
console.log(cliente2);
var carro1 = new Carro_1.Carro("ABCD1234", "Vermelho", "Honda Civic", 75.00, 4);
var carro2 = new Carro_1.Carro("DCBA4321", "Preto", "Toyota Camry", 120.00, 4);
console.log(carro1);
console.log(carro2);
var moto1 = new Moto_1.Moto("EFGH5678", "Azul", "Honda CBR600RR", 45.00);
var moto2 = new Moto_1.Moto("HGFE8765", "Amarelo", "Harley-Davidson Sportster", 60.00);
console.log(moto1);
console.log(moto2);
var aluguel = new Aluguel_1.Aluguel(carro1, cliente1);
console.log(aluguel);

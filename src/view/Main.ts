import { Aluguel } from "../model/Aluguel";
import { Cliente, TipoCarteira } from "../model/Cliente";
import { Veiculo } from "../model/Veiculo";
import { Carro } from '../model/Carro';
import { Moto } from "../model/Moto";

// class Main{

//     public clientes: Array<Cliente>
//     public alugueis: Array<Aluguel>;
//     public veiculosDisponiveis: Array<Veiculo>;
//     public veiculosAlugados: Array<Veiculo>;

// }

const cliente1 = new Cliente("19149480766", TipoCarteira.A);
const cliente2 = new Cliente("19149480766", TipoCarteira.B);

console.log(cliente1)
console.log(cliente2)

const carro1 = new Carro("ABCD1234", "Vermelho", "Honda Civic", 75.00, 4);
const carro2 = new Carro("DCBA4321", "Preto", "Toyota Camry", 120.00, 4);

console.log(carro1)
console.log(carro2)

const moto1 = new Moto("EFGH5678", "Azul", "Honda CBR600RR", 45.00);
const moto2 = new Moto("HGFE8765", "Amarelo", "Harley-Davidson Sportster", 60.00);

console.log(moto1)
console.log(moto2)

const aluguel = new Aluguel(carro1, cliente1)

console.log(aluguel)
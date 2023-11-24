import { Aluguel } from "./model/Aluguel";
import { Cliente, TipoCarteira } from "./model/Cliente";
import { Carro } from './model/Carro';
import { Moto } from "./model/Moto";
import { Locacao } from "./service/locacao";

const locacao:Locacao = new Locacao()

const cliente1 = new Cliente("19149480766", TipoCarteira.A);
const cliente2 = new Cliente("19149480766", TipoCarteira.B);

//const carro1 = new Carro("ABCD1234", "Vermelho", "Honda Civic", 75.00, 4);
//const carro2 = new Carro("DCBA4321", "Preto", "Toyota Camry", 120.00, 4);

const moto1 = new Moto("EFGH5678", "Azul", "Honda CBR600RR", 45.00);
const moto2 = new Moto("HGFE8765", "Amarelo", "Harley-Davidson Sportster", 60.00);

const aluguel = new Aluguel(moto1, cliente1)

console.log(aluguel)

locacao.addCarro(new Carro("ABCD1234", "Vermelho", "Honda Civic", 75.00, 4))
locacao.addCarro(new Carro("DCBA4321", "Preto", "Toyota Camry", 120.00, 4))
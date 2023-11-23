import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    public id: number = 0
    public quantidadePortas: number;

    constructor(placa: string, cor: string, modelo: string, valorHora: number, quantidadePortas: number) {
        super(placa, cor, modelo, valorHora); 
        
        this.quantidadePortas = quantidadePortas;

        this.id += Veiculo.ultimoId
        Veiculo.ultimoId++
    }
}
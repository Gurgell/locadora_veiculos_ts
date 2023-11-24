import { Veiculo } from "../Veiculo/Veiculo";

export class Carro extends Veiculo{
    public quantidadePortas: number;

    constructor(placa: string, cor: string, modelo: string, valorHora: number, quantidadePortas: number) {
        super(placa, cor, modelo, valorHora); 
        
        this.quantidadePortas = quantidadePortas;
    }
}
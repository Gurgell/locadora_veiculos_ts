import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo{
    public id: number = 0

    constructor(placa: string, cor: string, modelo: string, valorHora: number) {
        super(placa, cor, modelo, valorHora); 

        this.id += Veiculo.ultimoId
        Veiculo.ultimoId++
    }
}
import { Veiculo } from "../Veiculo/Veiculo";

export class Moto extends Veiculo{

    constructor(placa: string, cor: string, modelo: string, valorHora: number) {
        super(placa, cor, modelo, valorHora);   
    }
}
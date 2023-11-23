import { FormatadorData } from "../util/FormatadorData";
import { Cliente } from "./Cliente";
import { Veiculo } from "./Veiculo";

export class Aluguel{
    public static ultimoId: number = 1;
    public id: number = 0;

    public dataInicio: Date;
    public dataFim?: Date;
    public valorHoraContratado: number;

    constructor(public veiculo: Veiculo, public cliente: Cliente) {
        this.dataInicio = new Date();
        this.valorHoraContratado = veiculo.valorHora;

        this.id += Aluguel.ultimoId
        Aluguel.ultimoId++
    }

}
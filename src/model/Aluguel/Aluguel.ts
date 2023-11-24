import { FormatadorData } from "../../util/FormatadorData";
import { Cliente } from "../Cliente/Cliente";
import { Veiculo } from "../Veiculo/Veiculo";

export class Aluguel{
    public static ultimoId: number = 1
    public id: number
    
    public dataInicio: Date
    public dataFim?: Date
    public valorHoraContratado: number
    public faturaPaga:boolean = false

    constructor(public veiculo: Veiculo, public cliente: Cliente) {
        this.dataInicio = new Date()
        this.valorHoraContratado = veiculo.valorHora;
        this.id = Aluguel.ultimoId++
    }
    finalizarAluguel():void{
        this.dataFim=new Date()
    }
    calcularFatura():number{
        const quantidadeTempo:number = this.dataFim.getTime() - this.dataInicio.getTime()
        const quantidadeHoras:number = Math.round(quantidadeTempo / 3600000)

        return quantidadeHoras * this.valorHoraContratado
    }
    pagarFatura():void{
        this.faturaPaga = true
    }
}
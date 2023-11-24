export class Cliente{
    public static ultimoId: number = 1
    public id: number
    public estaAlugandoVeiculo:boolean = false

    constructor(public cpf: string,public nome:string, public tipoCarteira: TipoCarteira){

        this.id = Cliente.ultimoId++
    }
}

export enum TipoCarteira {
    A = "Moto",
    B = "Carro",
    AB = "Moto e carro"
}
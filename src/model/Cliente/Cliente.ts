export class Cliente{
    public static ultimoId: number = 1
    public id: number
    public estaAlugandoVeiculo:boolean = false

    constructor(public cpf: string,public nome:string, public tipoCarteira: string){

        this.id = Cliente.ultimoId++
    }

    public transformarTipoCarteira(tipoCarteira: string): TipoCarteira{
        const carteira = tipoCarteira.toUpperCase()

        if (carteira === 'A'){
            return TipoCarteira.A
        }else if (carteira === 'B'){
            return TipoCarteira.B
        }
        else if (carteira === 'AB'){
            return TipoCarteira.AB
        }else{
            throw new Error("O tipo de carteira digitado não existe!")
        }
    }
}

export enum TipoCarteira {
    A = "Moto",
    B = "Carro",
    AB = "Moto e carro"
}


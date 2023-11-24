export class Cliente{
    public static ultimoId: number = 1;
    public id: number = 0;

    constructor(public cpf: string, public tipoCarteira: TipoCarteira){

        this.id += Cliente.ultimoId
        Cliente.ultimoId++
    }
}

export enum TipoCarteira {
    A = "Moto",
    B = "Carro",
    AB = "Moto e carro"
}
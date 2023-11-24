export abstract class Veiculo{
    public static ultimoId: number = 1;
    public id: number = 0
    public alugado: boolean = false

    constructor(
        public placa: string,
        public cor: string,
        public modelo: string,
        public valorHora: number
    ) {
        this.id += Veiculo.ultimoId;
        Veiculo.ultimoId++;
    }

}
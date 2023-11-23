export abstract class Veiculo{
    public static ultimoId: number = 1;

    constructor(
        public placa: string,
        public cor: string,
        public modelo: string,
        public valorHora: number
    ) {}

}
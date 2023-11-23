export class FormatadorData{

    public static formatarPTBR(data: Date): string{
        const opcoesFormato = { timeZone: "America/Sao_Paulo" };

        return data.toLocaleString("pt-BR", opcoesFormato);

    }
    
}
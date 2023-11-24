import { Moto } from '../../model/Moto/Moto';
import { Aluguel } from '../../model/Aluguel/Aluguel';
import { Cliente, TipoCarteira } from '../../model/Cliente/Cliente';
import { Carro } from '../../model/Carro/Carro';
import { Veiculo } from '../../model/Veiculo/Veiculo';

export class Locadora {
    private veiculos: Veiculo[] = new Array<Veiculo>;
    private clientes: Cliente[]= new Array<Cliente>
    private alugueis: Aluguel[]= new Array<Aluguel>

    // CRUD veículos

    addVeiculo(novoVeiculo: Veiculo): void{
        const veiculoExiste = this.veiculos.some(veiculo => veiculo.placa == novoVeiculo.placa)

        if (!veiculoExiste){
            this.veiculos.push(novoVeiculo)
        }  
        else{
            throw new Error("Já existe um Veículo cadastrado com essa placa")
        }   
    }

    buscarTodosVeiculos(): Veiculo[]{
        if (this.veiculos.length === 0){
            throw new Error("Não existem veículos!");
        }
        return this.veiculos;
    }

    buscarMotos(): Veiculo[]{
        const motos = this.buscarTodosVeiculos().filter(veiculo => veiculo instanceof(Moto))

        if (motos.length === 0){
            throw new Error("Não existem motos!");
        }
        return motos;
    }

    buscarCarros(): Veiculo[]{
        const carros = this.buscarTodosVeiculos().filter(veiculo => veiculo instanceof(Carro))

        if (carros.length === 0){
            throw new Error("Não existem carros!");
        }
        return carros;

    }

    buscarVeiculoPorId(id: number): Veiculo{
        const veiculo = this.veiculos.find(veiculo => veiculo.id == id)
        if (veiculo != undefined){
            return veiculo
        }else{
            throw new Error("Este veículo não existe!")
        }
    }

    buscarVeiculoPorPlaca(placa: string): Veiculo{
        const veiculo = this.veiculos.find(veiculo => veiculo.placa == placa)
         if (veiculo != undefined){
             return veiculo
         }else{
             throw new Error("Este veículo não existe!")
         }
    }

    buscarVeiculosDisponiveis(): Veiculo[]{
        const veiculosDisponiveis = this.buscarTodosVeiculos().filter(veiculo => !veiculo.alugado)

        if (veiculosDisponiveis.length === 0){
            throw new Error("Não existem veículos disponíveis no momento!");
        }

        return veiculosDisponiveis;
    }

    buscarVeiculosAlugados(): Veiculo[]{
        const veiculosAlugados = this.buscarTodosVeiculos().filter(veiculo => veiculo.alugado)

        if (veiculosAlugados.length === 0){
            throw new Error("Não existem veículos alugados no momento!");
        }

        return veiculosAlugados;
         
    }

    editarVeiculo(veiculo: Veiculo): void{
        const index: number = this.veiculos.indexOf(this.buscarVeiculoPorId(veiculo.id))

        if (index != -1){
            if (this.veiculos[index].placa == veiculo.placa){
                this.veiculos.splice(index, 1, veiculo)
            }else{
                if(this.veiculos.find(car => car.placa == veiculo.placa) == undefined){
                     this.veiculos.splice(index, 1, veiculo)
                } else throw new Error("Já existe um veículo cadastrado com essa placa")
            }
        }else throw new Error("Este veículo não existe!")
    }

    removerVeiculo(id: number): void{
        const index: number = this.veiculos.indexOf(this.buscarVeiculoPorId(id))
        if (index != -1){
            this.veiculos.splice(index, 1)
        }else throw new Error("Este veículo não existe!")
    }


    addCliente(novoCliente: Cliente): void{
        const clienteExiste = this.clientes.some(cliente => cliente.cpf == novoCliente.cpf)

        if (!clienteExiste){
            this.clientes.push(novoCliente)
        }  
        else{
            throw new Error("Já existe um Cliente cadastrado com esse CPF")
        }   
    }

    buscarTodosClientes(): Cliente[]{
        if (this.clientes.length === 0){
            throw new Error("Não existem clientes!");
        }
        return this.clientes
    }

    buscarClientePorId(id: number): Cliente{
        const cliente = this.clientes.find(cli => cli.id == id)
        if (cliente != undefined){
            return cliente
        }else{
            throw new Error("Não existe cliente algum com esse ID!")
        }
    }

    buscarClientePorCPF(cpf: string): Cliente{
        const cliente = this.clientes.find(cli => cli.cpf == cpf)
        if (cliente != undefined){
            return cliente
        }else{
            throw new Error("Não existe cliente algum com esse CPF")
        }
    }

    editarCliente(cliente: Cliente): void{
        const index: number = this.clientes.indexOf(this.buscarClientePorId(cliente.id))

        if (index != -1){
            if (this.clientes[index].cpf == cliente.cpf){
                this.clientes.splice(index, 1, cliente)
            }else{
                if(this.clientes.find(cli => cli.cpf == cliente.cpf) == undefined){
                    this.clientes.splice(index, 1, cliente)
                } else throw new Error("Já existe um cliente cadastrado com esse CPF")
            }
        }else throw new Error("Este cliente não existe!")
    }

    removerCliente(id: number): void{
        const index: number = this.clientes.indexOf(this.buscarClientePorId(id))
        if (index != -1){
            this.clientes.splice(index, 1)
        }else throw new Error("Este cliente não existe!")
    }

 // CRUD aluguel
    addAluguel(cpf:string,placa:string):void{
        const cliente = this.buscarClientePorCPF(cpf)
        const veiculo = this.buscarVeiculoPorPlaca(placa)
        // verifica se o cliente é habilitado pro tipo de veiculo que deseja alugar
        let habilitado:boolean = false
        if (cliente.tipoCarteira==TipoCarteira.AB || 
            (cliente.tipoCarteira==TipoCarteira.A && (veiculo instanceof(Moto))) ||
            (cliente.tipoCarteira==TipoCarteira.B && (veiculo instanceof(Carro))) ){
            habilitado=true
        }

        if (!cliente.estaAlugandoVeiculo && !veiculo.alugado && habilitado){
            this.alugueis.push(new Aluguel(veiculo,cliente))
            this.veiculos.map(auto=>{
                if (auto.id==veiculo.id)
                    auto.alugado=true       
            })
            this.clientes.map(cli=>{
                if (cli.id==cliente.id)
                    cli.estaAlugandoVeiculo=true
            })
        }else if(cliente.estaAlugandoVeiculo){
            throw new Error("Cliente já está alugando um Veículo")
        }else if (veiculo.alugado) {
            throw new Error("Veículo indisponivel")
        }else throw new Error("Cliente não possui habilitação para o tipo do Veículo")
    }

    buscarAlugueisPorCPF(cpf: string): Aluguel[]{
        try {
            const cliente = this.buscarClientePorCPF(cpf);
        } catch (error) {
            throw error
        }

        const alugueisPorCPF = this.alugueis.filter(aluguel => aluguel.cliente.cpf === cpf && aluguel.dataFim == undefined)

        if (alugueisPorCPF.length === 0){
            throw new Error("Este cliente não possui aluguéis!");
        }else{
            return alugueisPorCPF;
        }
    }

    buscarAlugueisPorPlaca(placa: string): Aluguel[]{

        try {
            const veiculo = this.buscarVeiculoPorPlaca(placa);
        } catch (error) {
            throw error
        }
        
        const alugueisPorPlaca = this.alugueis.filter(aluguel => aluguel.veiculo.placa === placa && aluguel.dataFim == undefined);

        if (alugueisPorPlaca.length === 0){
            throw new Error("Este veículo não possui aluguéis!");
        }else{
            return alugueisPorPlaca;
        }

    }

    buscarAlugueis(): Aluguel[]{
        const alugueis = this.alugueis

        if (alugueis.length === 0){
            throw new Error("Não existem aluguéis!")
        }else{
            return alugueis
        }
    }
    buscarAlugueisAtivos():Aluguel[]{

        if (this.alugueis.length === 0){
            throw new Error("Não existem aluguéis!")
        }else{
            const alugueis = this.alugueis.filter(Aluguel=>Aluguel.dataFim==undefined)
            if (alugueis.length === 0){
                throw new Error("Não existem aluguéis!")
            }else{
                return alugueis
            }
        }
    }
    finalizarAluguel(cpf:string, placa:string):number{
        const alugueisAtivos =this.buscarAlugueisAtivos()
        this.buscarClientePorCPF(cpf)
        const index: number = this.alugueis.indexOf(alugueisAtivos.find(aluguel=>aluguel.cliente.cpf = cpf))
        if (index!=-1){
            this.alugueis[index].finalizarAluguel()
            const indexCliente: number = this.clientes.indexOf(this.alugueis[index].cliente)
            this.clientes[indexCliente].estaAlugandoVeiculo=false
            const indexVeiculo: number = this.veiculos.indexOf(this.alugueis[index].veiculo)
            this.veiculos[indexVeiculo].alugado=false
            return this.alugueis[index].calcularFatura()
        }else throw new Error("Aluguel não encontrado!")
    }

}
import { Moto } from '../model/Moto/Moto';
import { Aluguel } from '../model/Aluguel/Aluguel';
import { Cliente } from '../model/Cliente/Cliente';
import { Carro } from '../model/Carro/Carro';
import { Veiculo } from '../model/Veiculo/Veiculo';

export class Locadora {
    private veiculos: Veiculo[] = new Array<Veiculo>;
    private clientes:Cliente[]= new Array<Cliente>
    private alugueis:Aluguel[]= new Array<Aluguel>

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
             throw new Error("Veículo não encontrado!")
         }
    }

    buscarVeiculoPorPlaca(placa: string): Veiculo{
        const veiculo = this.veiculos.find(veiculo => veiculo.placa == placa)
         if (veiculo != undefined){
             return veiculo
         }else{
             throw new Error("Veículo não encontrado!")
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
        }else throw new Error("Veículo não encontrado!")
    }

    removerVeiculo(id: number): void{
        const index: number = this.veiculos.indexOf(this.buscarVeiculoPorId(id))
        if (index != -1){
            this.veiculos.splice(index, 1)
        }else throw new Error("Veículo não encontrado!")
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
        }else throw new Error("Cliente não encontrado!")
    }

    removerCliente(id: number): void{
        const index: number = this.clientes.indexOf(this.buscarClientePorId(id))
        if (index != -1){
            this.clientes.splice(index, 1)
        }else throw new Error("Cliente não encontrado!")
    }

}
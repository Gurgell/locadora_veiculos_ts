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
        return this.veiculos
    }

    buscarMotos(): Veiculo[]{
        return this.buscarTodosVeiculos().filter(veiculo => veiculo instanceof(Moto))
    }

    buscarCarros(): Veiculo[]{
        return this.buscarTodosVeiculos().filter(veiculo => veiculo instanceof(Carro))
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

// CRUD cliente

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
    return this.clientes
}

buscarClientePorId(id: number): Cliente{
    const cliente = this.clientes.find(cli => cli.id == id)
     if (cliente != undefined){
         return cliente
     }else{
         throw new Error("Cliente não encontrado!")
     }
}

buscarClientePorCPF(cpf: string): Cliente{
    const cliente = this.clientes.find(cli => cli.cpf == cpf)
     if (cliente != undefined){
         return cliente
     }else{
         throw new Error("Cliente não encontrado!")
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

// CRUD aluguel
addAluguel(cpf:string,placa:string):void{
    const cliente = this.buscarClientePorCPF(cpf)
    const veiculo = this.buscarVeiculoPorPlaca(placa)
    if (!cliente.estaAlugandoVeiculo && !veiculo.alugado){
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
    }else throw new Error("Veículo indisponivel")
}
}
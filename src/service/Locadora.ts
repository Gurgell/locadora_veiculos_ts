import { Moto } from '../model/Moto/Moto';
import { Aluguel } from '../model/Aluguel/Aluguel';
import { Cliente } from '../model/Cliente/Cliente';
import { Carro } from '../model/Carro/Carro';
import { Veiculo } from '../model/Veiculo/Veiculo';

export class Locacao {
    private veiculos: Veiculo[] = new Array<Veiculo>;
    private clientes:Cliente[]= new Array<Cliente>
    private alugueis:Aluguel[]= new Array<Aluguel>

    // private carros:Carro[]= new Array<Carro>
    // private motos:Moto[] = new Array<Moto>

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

    removerVeiculo(id: number): void{
        const index: number = this.veiculos.indexOf(this.buscarVeiculoPorId(id))
        if (index != -1){
            this.veiculos.splice(index, 1)
        }else throw new Error("Veículo não encontrado!")
    }

    // editarVeiculo(id: number): void{
    //     const index: number = this.carros.indexOf(this.buscarCarroPorId(id))

    //     if (index != -1){
    //         if (this.carros[index].placa == carro.placa){
    //             this.carros.splice(index, 1, carro)
    //         }else{
    //             if(this.carros.find(car => car.placa == carro.placa) == undefined){
    //                 this.carros.splice(index, 1, carro)
    //             } else throw new Error("Já existe um carro cadastrado com essa placa")
    //         }
    //     }else throw new Error("Carro não encontrado!")
    // }

    
    // editarMoto(moto:Moto):void{
    //     const index:number = this.motos.indexOf(this.buscarMotoPorId(moto.id))
    //     if (index!=-1){
    //         if (this.motos[index].placa == moto.placa){
    //             this.motos.splice(index, 1, moto)
    //         }else{
    //             if(this.motos.find(m => m.placa==moto.placa)==undefined){
    //                 this.motos.splice(index,1,moto)
    //             } else throw new Error("Já existe uma moto cadastrada com essa placa")
    //         }
    //     }else throw new Error("Moto não encontrada!")
    // }

}
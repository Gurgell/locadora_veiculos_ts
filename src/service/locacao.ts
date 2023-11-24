import { Moto } from './../model/Moto';
import { Aluguel } from '../model/Aluguel';
import { Cliente } from '../model/Cliente';
import { Carro } from './../model/Carro';
export class Locacao {
    private carros:Carro[]= new Array<Carro>
    private motos:Moto[] = new Array<Moto>
    private clientes:Cliente[]= new Array<Cliente>
    private alugueis:Aluguel[]= new Array<Aluguel>
    constructor(){}
    //crud dos carros
    addCarro(novoCarro:Carro):void{
        const carro:Carro|undefined = this.carros.find(car => car.placa == novoCarro.placa)
        if (carro == undefined)
            this.carros.push(novoCarro)
        else throw new Error("Já existe um carro cadastrado com essa placa")
    }
    buscarCarroPorPlaca(placa:string):Carro{
        const carro:Carro|undefined = this.carros.find(car => car.placa==placa)
        if (carro!= undefined){
            return carro
        }else{
            throw new Error("Carro não encontrado!")
        }
    }
    buscarCarroPorId(id:number):Carro{
        const carro:Carro|undefined = this.carros.find(car => car.id==id)
        if (carro!= undefined){
            return carro
        }else{
            throw new Error("Carro não encontrado!")
        }
    }
    buscarTodosCarros():Carro[]{
        return this.carros
    }
    editarCarro(carro:Carro):void{
        const index:number = this.carros.indexOf(this.buscarCarroPorId(carro.id))
        if (index!=-1){
            if (this.carros[index].placa == carro.placa){
                this.carros.splice(index,1,carro)
            }else{
                if(this.carros.find(car => car.placa==carro.placa)==undefined){
                    this.carros.splice(index,1,carro)
                } else throw new Error("Já existe um carro cadastrado com essa placa")
            }
        }else throw new Error("Carro não encontrado!")
    }
    removerCarro(id:number):void{
        const index:number = this.carros.indexOf(this.buscarCarroPorId(id))
        if (index!=-1){
            this.carros.splice(index)
        }else throw new Error("Carro não encontrado!")
    }

    //crud dos Motos
    addMoto(novaMoto:Moto):void{
        const moto:Moto|undefined = this.motos.find(m => m.placa == novaMoto.placa)
        if (moto == undefined)
            this.motos.push(novaMoto)
        else throw new Error("Já existe uma moto cadastrada com essa placa")
    }
    buscarMotoPorPlaca(placa:string):Moto{
        const moto:Moto|undefined = this.motos.find(m => m.placa==placa)
        if (moto!= undefined){
            return moto
        }else{
            throw new Error("Moto não encontrada!")
        }
    }
    buscarMotoPorId(id:number):Moto{
        const moto:Moto|undefined = this.motos.find(m => m.id==id)
        if (moto!= undefined){
            return moto
        }else{
            throw new Error("Moto não encontrada!")
        }
    }
    buscarTodosMotos():Moto[]{
        return this.motos
    }
    editarMoto(moto:Moto):void{
        const index:number = this.motos.indexOf(this.buscarCarroPorId(moto.id))
        if (index!=-1){
            if (this.motos[index].placa == moto.placa){
                this.motos.splice(index,1,moto)
            }else{
                if(this.motos.find(m => m.placa==moto.placa)==undefined){
                    this.motos.splice(index,1,moto)
                } else throw new Error("Já existe uma moto cadastrada com essa placa")
            }
        }else throw new Error("Moto não encontrada!")
    }
    removerMoto(id:number):void{
        const index:number = this.motos.indexOf(this.buscarMotoPorId(id))
        if (index!=-1){
            this.motos.splice(index)
        }else throw new Error("Moto não encontrada!")
    }
}
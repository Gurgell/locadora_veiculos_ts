import { Aluguel } from "./model/Aluguel/Aluguel";
import { Cliente, TipoCarteira } from "./model/Cliente/Cliente";
import { Carro } from './model/Carro/Carro';
import { Moto } from "./model/Moto/Moto";
import { Locadora } from "./service/Locadora/Locadora";
import { Veiculo } from "./model/Veiculo/Veiculo";
import * as readline from 'readline';

const locadora: Locadora = new Locadora()

const cliente1 = new Cliente("123123213", "Roberto", "a");
const cliente2 = new Cliente("133322243", "Joel", "B");
const cliente3 = new Cliente("133322", "Victor", "aB");

const carro1 = new Carro("ABCD1234", "Vermelho", "Honda Civic", 75.00, 4);
const carro2 = new Carro("DCBA4321", "Preto", "Toyota Camry", 120.00, 4);

const moto1 = new Moto("EFGH5678", "Azul", "Honda CBR600RR", 45.00);
const moto2 = new Moto("HGFE8765", "Amarelo", "Harley-Davidson Sportster", 60.00);

locadora.addCliente(cliente1)
locadora.addCliente(cliente2)
locadora.addCliente(cliente3)

locadora.addVeiculo(carro1)
locadora.addVeiculo(carro2)

locadora.addVeiculo(moto1)
locadora.addVeiculo(moto2)



console.log(locadora.buscarTodosVeiculos())

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu(): void {
    rl.question(
    `\nSelecione uma das opções abaixo:
    1. Cadastrar carro
    2. Cadastrar moto
    3. Cadastrar cliente
    4. Devolver veículo
    5. Listar veículos disponíveis
    6. Listar veículos alugados
    7. Mostrar fatura do cliente
    8. Listar motos
    9. Listar carros
    10. Buscar veículo por id
    11. Buscar veículo por placa
    12. Listar clientes
    13. Buscar cliente por id
    14. Buscar cliente por CPF
    15. Buscar aluguéis
    16. Buscar aluguel por CPF
    17. Buscar aluguel por placa
    20. Sair do sistema
    Opção: `,
        (option) => {
            switch (option) {

                case '1':
                    rl.question('\nDigite a placa do carro: ', (placa) => {
                        rl.question('Digite a cor do carro: ', (cor) => {
                            rl.question('Digite o modelo do carro: ', (modelo) => {
                                rl.question('Digite o preço da diária do carro: ', (precoDiaria) => {
                                    rl.question('Digite o número de portas do carro: ', (numeroPortas) => {
                                        
                                        try {
                                            locadora.addVeiculo(new Carro(placa, cor, modelo, Number(precoDiaria), Number(numeroPortas)));

                                        } catch (error) {
                                            console.log('Erro: ' + error.message)
                                        } finally{
                                            exibirMenu();
                                        }
                                    });
                                });
                            });
                        });
                    });
                    break;

                case '2':
                    rl.question('\nDigite a placa da moto: ', (placa) => {
                        rl.question('Digite a cor da moto: ', (cor) => {
                            rl.question('Digite o modelo da moto: ', (modelo) => {
                                rl.question('Digite o preço da diária do moto: ', (precoDiaria) => {
                                    try {
                                        locadora.addVeiculo(new Moto(placa, cor, modelo, Number(precoDiaria)));

                                    } catch (error) {
                                        console.log('Erro: ' + error.message)
                                    } finally{
                                        exibirMenu();
                                    }
                                });
                            });
                        });
                    });
                    break;

                case '3':
                    rl.question('\nDigite o nome completo do cliente: ', (nome) => {
                        rl.question('Digite o CPF do cliente: ', (cpf) => {
                            rl.question('Digite o tipo de carteira (A, B ou AB) do cliente: ', (tipoCarteira) => {
                                try {
                                    locadora.addCliente(new Cliente(cpf, nome, tipoCarteira))
                                } catch (error) {
                                    console.log('Erro: ' + error.message)
                                } finally{
                                    exibirMenu();
                                }
                            });
                        });
                    });
                    
                    break;

                case '4':
                    console.log('\nOpção 3 escolhida: Devolver veículo');
                    break;

                case '5':
                    try {
                        console.log('\n')
                        console.log(locadora.buscarVeiculosDisponiveis())
                    } catch (error) {
                        console.log('Erro: ' + error.message)
                    } finally{
                        exibirMenu();
                    }
                    break;

                case '6':
                    try {
                        console.log('\n')
                        console.log(locadora.buscarVeiculosAlugados())
                    } catch (error) {
                        console.log('Erro: ' + error.message)
                    } finally{
                        exibirMenu();
                    }
                    break;

                case '7':
                    console.log('\nOpção 6 escolhida: Mostrar fatura do cliente');
                    break;

                case '8':
                    try {
                        console.log('\n')
                        console.log(locadora.buscarMotos())
                    } catch (error) {
                        console.log('Erro: ' + error.message)
                    }finally{
                        exibirMenu();
                    }
                    break;

                case '9':
                    try {
                        console.log('\n')
                        console.log(locadora.buscarCarros())
                    } catch (error) {
                        console.log('Erro: ' + error.message)
                    } finally{
                        exibirMenu();
                    }
                    break;

                case '10':
                    rl.question('\nDigite o id do veículo que deseja buscar: ', (id) => {
                        try {
                            console.log(locadora.buscarVeiculoPorId(Number(id)))
                        } catch (error) {
                            console.log('Erro: ' + error.message)
                        }finally{
                            exibirMenu();
                        }
                    });
                    
                    break;

                    
                case '11':  
                    rl.question('\nDigite a placa do veículo que deseja buscar: ', (placa) => {
                        try {
                            console.log(locadora.buscarVeiculoPorPlaca(placa))
                        } catch (error) {
                            console.log('Erro: ' + error.message)
                        } finally {
                            exibirMenu(); 
                        }
                    });
                    break;

                case '12':
                    try {
                        console.log('\n')
                        console.log(locadora.buscarTodosClientes())
                    } catch (error) {
                        console.log('Erro: ' + error.message)
                    } finally {
                        exibirMenu(); 
                    }
                    break;

                case '13':
                    rl.question('\nDigite o id do cliente que deseja buscar: ', (id) => {
                        try {
                            console.log(locadora.buscarClientePorId(Number(id)))
                        } catch (error) {
                            console.log('Erro: ' + error.message)
                        } finally {
                            exibirMenu(); 
                        } 
                    });
                    break;

                case '14':
                    rl.question('\nDigite o CPF do cliente que deseja buscar: ', (cpf) => {
                        try {
                            console.log(locadora.buscarClientePorCPF(cpf)) 
                        } catch (error) {
                            console.log('Erro: ' + error.message)
                        } finally {
                            exibirMenu(); 
                        }
                    });
                    break;

                case '15':
                    try {
                        console.log('\n')
                        console.log(locadora.buscarAlugueis()) 
                    } catch (error) {
                        console.log('Erro: ' + error.message)
                    } finally {
                        exibirMenu(); 
                    }
                break;

                case '16':
                    rl.question('\nDigite o CPF do cliente para mostrar os seus aluguéis: ', (cpf) => {
                        try {
                            console.log(locadora.buscarAlugueisPorCPF(cpf)) 
                        } catch (error) {
                            console.log('Erro: ' + error.message)
                        } finally {
                            exibirMenu(); 
                        }
                    });
                break;

                case '17':
                    rl.question('\nDigite a placa do veículo para mostrar os seus aluguéis: ', (placa) => {
                        try {
                            console.log(locadora.buscarAlugueisPorPlaca(placa)) 
                        } catch (error) {
                            console.log('Erro: ' + error.message)
                        } finally {
                            exibirMenu(); 
                        }
                    });
                break;

                case '20':
                    console.log('\nOpção 20 escolhida: Sair do sistema');
                    rl.close();
                    break;
                default:
                    console.log('\nOpção inválida. Tente novamente.');
                    exibirMenu();
            }

        }
    );
}

exibirMenu();
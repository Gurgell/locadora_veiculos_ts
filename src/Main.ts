import { Aluguel } from "./model/Aluguel/Aluguel";
import { Cliente, TipoCarteira } from "./model/Cliente/Cliente";
import { Carro } from './model/Carro/Carro';
import { Moto } from "./model/Moto/Moto";
import { Locacao } from "./service/Locadora";
import { Veiculo } from "./model/Veiculo/Veiculo";
import * as readline from 'readline';

const locacao: Locacao = new Locacao()

const cliente1 = new Cliente("19149480766", TipoCarteira.A);
const cliente2 = new Cliente("19149480766", TipoCarteira.B);

//const carro1 = new Carro("ABCD1234", "Vermelho", "Honda Civic", 75.00, 4);
//const carro2 = new Carro("DCBA4321", "Preto", "Toyota Camry", 120.00, 4);

const moto1 = new Moto("EFGH5678", "Azul", "Honda CBR600RR", 45.00);
const moto2 = new Moto("HGFE8765", "Amarelo", "Harley-Davidson Sportster", 60.00);

const aluguel = new Aluguel(moto1, cliente1)


locacao.addVeiculo(new Carro("ABCD1234", "Vermelho", "Honda Civic", 75.00, 4))
locacao.addVeiculo(new Moto("ABCD1234", "Preto", "Toyota Camry", 120.00))

console.log(locacao.buscarTodosVeiculos())




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu(): void {
    rl.question(
        `Selecione uma das opções abaixo:
        1. Cadastrar veículo
        2. Alugar veículo
        3. Devolver veículo
        4. Listar veículos disponíveis
        5. Listar veículos alugados
        6. Mostrar fatura do cliente
        7. Sair do sistema
        Opção: `,
        (option) => {
            switch (option) {
                case '1':
                    try {
                        rl.question('Digite a placa do veículo: ', (placa) => {
                            rl.question('Digite a cor do veículo: ', (cor) => {
                                rl.question('Digite o modelo do veículo: ', (modelo) => {
                                    rl.question('Digite o preço da diária do veículo: ', (precoDiaria) => {
                                        rl.question('Digite o número de portas do veículo: ', (numeroPortas) => {
    
                                            // Adiciona o veículo à locação
                                            locacao.addVeiculo(new Carro(placa, cor, modelo, Number(precoDiaria), Number(numeroPortas)));
    
                                            // Exibe o menu novamente
                                            exibirMenu();
                                        });
                                    });
                                });
                            });
                        });
                    } catch (error) {
                        console.log("Erro ao cadastrar o veículo! " + error)
                    }
                    
                    break;
                case '2':
                    try {
                        rl.question('Digite o nome completo do cliente: ', (nome) => {
                            rl.question('Digite o CPF do cliente: ', (cpf) => {
                                rl.question('Digite o tipo de carteira do cliente: ', (tipoCarteira) => {
                                    
                                });
                            });
                        });
                    } catch (error) {
                        console.log(error)
                    }
                    break;
                case '3':
                    console.log('Opção 3 escolhida: Devolver veículo');
                    break;
                case '4':
                    console.log('Opção 4 escolhida: Listar veículos disponíveis');
                    break;
                case '5':
                    console.log('Opção 5 escolhida: Listar veículos alugados');
                    break;
                case '6':
                    console.log('Opção 6 escolhida: Mostrar fatura do cliente');
                    break;
                case '7':
                    console.log('Opção 7 escolhida: Sair do sistema');
                    rl.close();
                    break;
                default:
                    console.log('Opção inválida. Tente novamente.');
            }

            exibirMenu();
        }
    );
}

// Inicia o programa chamando a função do menu
exibirMenu();
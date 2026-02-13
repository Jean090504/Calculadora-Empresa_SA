/*******************************************************************************************************************************************
* Objetivo: Desenvolver uma aplicação para a empresa Cálculos SA 
* Data: 13/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//App.js apenas entrada de dados 

//Import da biblioteca para entrada de dados
var readline = require('readline');

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo à calculadora da empresa Cálculos SA! \n Aqui você pode realizar as seguintes operações: Soma, Subtração, Multiplicação e Divisão. \n')

//Solicitar a operação desejada pelo usuário
entradaDados.question('Digite qual a operação deseja realizar: \n Soma \n Subtração \n Multiplicação \n Divisão \n', function (operacao) {
    //Converter a operação para minúscula para facilitar a comparação
    let operacaoEscolhida = operacao.toLocaleLowerCase()

    //Import dos arquivos de tratativas e cálculos
    let tratativas = require('./modelo/tratativa')
    let calculos = require('./modelo/calculos')

    //Realizar a tratativa para validar a operação escolhida
    tratativas.tratativaString(operacaoEscolhida)
    
    //Solicitar os números para realizar a operação escolhida
    entradaDados.question('Digite o primeiro número: \n', function (primeiroNumero) {
        let numero1 = primeiroNumero

        //Realizar a tratativa para validar o primeiro número
        tratativas.tratativaNumero(numero1)

        //Solicitar o segundo número para realizar a operação escolhida
        entradaDados.question('Digite o segundo número: \n', function (segundoNumero) {
            let numero2 = segundoNumero

            //Realizar a tratativa para validar o segundo número
            tratativas.tratativaNumero(numero2)

            //Realizar os cálculos para a operação escolhida
            calculos.calcularSoma(numero1, numero2, operacaoEscolhida)

            if(calculos.calcularSoma(numero1, numero2, operacaoEscolhida) == false){
                console.log('A operação escolhida não é soma, portanto o resultado da soma não será exibido.')

            }

            calculos.calcularSubtracao(numero1, numero2, operacaoEscolhida)
            calculos.calcularMultiplicacao(numero1, numero2, operacaoEscolhida)
            calculos.calcularDivisao(numero1, numero2, operacaoEscolhida)
        })
    })
})
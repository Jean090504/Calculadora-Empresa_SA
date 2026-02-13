/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável pelas funções de cálculos desse projeto
* Data: 13/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/
//Função para realizar a soma de dois números
function calcularSoma(numero1, numero2, operacaoEscolhida, entradaDados) {
    //Converter os números para o formato numérico, substituindo vírgula por ponto
    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))  

    //Verificar se a operação escolhida é soma para exibir o resultado da soma
    if (operacaoEscolhida == 'soma') {
        console.log(`O resultado da soma é: ${Number(n1) + Number(n2)}`)
        return true
    } else{
        return false
    }
    
}

//Função para realizar a subtração de dois números
function calcularSubtracao(numero1, numero2, operacaoEscolhida, entradaDados) {
    //Converter os números para o formato numérico, substituindo vírgula por ponto
    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))    

    //Verificar se a operação escolhida é subtração para exibir o resultado da subtração
    if(operacaoEscolhida == 'subtracao' || operacaoEscolhida == 'subtração' || operacaoEscolhida == 'subtraçao') {
        console.log(`O resultado da subtração é: ${Number(n1) - Number(n2)}`)
        return true
    } else{
        return false
    }
    
}

//Função para realizar a multiplicação de dois números
function calcularMultiplicacao(numero1, numero2, operacaoEscolhida, entradaDados) {
    //Converter os números para o formato numérico, substituindo vírgula por ponto
    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))   

    //Verificar se a operação escolhida é multiplicação para exibir o resultado da multiplicação
    if(operacaoEscolhida == 'multiplicacao' || operacaoEscolhida == 'multiplicação' || operacaoEscolhida == 'multiplicaçao') {
        console.log(`O resultado da multiplicação é: ${Number(n1) * Number(n2)}`)
        return true
    } else{
        return false
    }
}

//Função para realizar a divisão de dois números
function calcularDivisao(numero1, numero2, operacaoEscolhida, entradaDados) {
    //Converter os números para o formato numérico, substituindo vírgula por ponto
    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))   

    //Verificar se a operação escolhida é divisão para exibir o resultado da divisão
    if(operacaoEscolhida == 'divisao' || operacaoEscolhida == 'divisão') {
        console.log(`O resultado da divisão é: ${Number(n1) / Number(n2)}`)
        return true
    } else{
        return false
    }
}

//Exportar as funções para serem utilizadas no arquivo app.js
module.exports = { calcularSoma, calcularSubtracao, calcularMultiplicacao, calcularDivisao }
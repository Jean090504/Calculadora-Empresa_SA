/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável pelas tratativas de erros e validação de dados desse projeto
* Data: 13/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Função para validar se o dado de entrada é uma operação válida
function tratativaString(operacaoEscolhida, entradaDados) {
    const operacoesValidas = ['soma', 'subtração', 'subtracao','subtraçao', 'multiplicação', 'multiplicacao','multiplicaçao', 'divisão', 'divisao']
   
    //Verificar se a operação escolhida pelo usuário é válida
    if (operacoesValidas.includes(operacaoEscolhida)) {
        return true // Operação válida
    } else if (operacaoEscolhida == ''){
        console.log('Erro: Operação inválida. Por favor, escolha uma das seguintes: Soma, Subtração, Multiplicação, Divisão.')
        entradaDados.close() 
        return false // Operação inválida
    }else {
        console.log('Erro: Operação inválida. Por favor, escolha uma das seguintes: Soma, Subtração, Multiplicação, Divisão.')
        entradaDados.close() 
        return false // Operação inválida
    }
}

//Função para validar se o dado de entrada é um número válido
function tratativaNumero(numero1, numero2, entradaDados, operacaoEscolhida) {
    //Converter os números para o formato numérico, substituindo vírgula por ponto
    let n1 = Number(String(numero1).replace(',', '.'))
    let n2 = Number(String(numero2).replace(',', '.'))

    //Verificar se a operação escolhida é divisão e se o número é zero, pois divisão por zero não é permitida
    if(operacaoEscolhida == 'divisao' || operacaoEscolhida == 'divisão') {
        if(n1 == 0){
            console.log('Erro: Divisão por zero não é permitida. Por favor, digite um número diferente de zero para o primeiro número.')
        } else {
            return true // Número válido para divisão
        }
    }

    //Verificar se os números são válidos
    if(isNaN(n1) || n1 == ''){
        console.log('Erro: Entrada inválida. Por favor, digite um número válido.')
        entradaDados.close()
    } else {
        return true // Número válido
    }

    //Verificar se a operação escolhida é divisão e se o número é zero, pois divisão por zero não é permitida
    if(operacaoEscolhida == 'divisao' || operacaoEscolhida == 'divisão') {
        if(n2 == 0){
            console.log('Erro: Divisão por zero não é permitida. Por favor, digite um número diferente de zero para o segundo número.')
        } else {
            return true // Número válido para divisão
        }
    }

    //Verificar se os números são válidos
    if(isNaN(n2) || n2 == ''){
        console.log('Erro: Entrada inválida. Por favor, digite um número válido.')
        entradaDados.close()
    } else {
        return true // Número válido
    }    
}

//Exportar as funções para serem utilizadas em outros arquivos
module.exports = { tratativaNumero, tratativaString };



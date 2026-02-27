/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável pelas funções de cálculos de soma, subtração, multiplicação e divisão
* Data: 13/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Modelo de Função anônima
//Calcular as 4 operções matemáticas
const calcular = function(numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorEscolhido = String(operador)
    let resultado

    //A ausecia da {} no return false é porque
    //tenha apenas uma linha de processamento a {} torna-se opcional

    //Entrada
    /* if(operadorEscolhido == 'SOMAR'){
        return resultado = valor1 + valor2
    }else if(operadorEscolhido == 'SUBTRAIR'){
        return resultado = valor1 - valor2
    }else if(operadorEscolhido == 'MULTIPLICAR'){
        return resultado = valor1 * valor2
    }else if(operadorEscolhido == 'DIVIDIR'){
        return resultado = valor1 / valor2
    }

    //Saida
    if(resultado !== undefined){
        return Number(resultado).toFixed(2)    
    else
        return false
    */
   
    switch(operadorEscolhido){
        case 'SOMAR':
            return Number(resultado).toFixed(2) = valor1 + valor2
            break
        case 'SUBTRAIR':
            return Number(resultado).toFixed(2) = valor1 - valor2
            break
        case 'MULTIPLICAR':
            return Number(resultado).toFixed(2) = valor1 * valor2
            break
        case 'DIVIDIR':
            return Number(resultado).toFixed(2) = valor1 / valor2
            break
        default:
            return false
    }


}
//HOF --> Higher-Order Function  === funcao que recebe outra funcao como parametro

function calcular(numero1, numero2, op) {

    return op(numero1, numero2)
}
function soma(num1, num2){
    return num1 + num2
}

function divisao(num1,num2){
    return num1 / num2
}
const resultadoDaSoma = calcular(3, 9, soma)//soma = callback
console.log(resultadoDaSoma)

const resultadoDaDivisao = calcular(9, 3, divisao)//divisao = callback
console.log(resultadoDaDivisao)
// function saudacao(nome){
//     console.log("Olaa", nome)
// }
// saudacao('Zorzi') //zorzi - argumento ao executar function    parametro - definicao da funcao
// saudacao('leozera')

// const saudacao = (nome) => {
//     console.log('eh tois', nome)
// }

const saudacao = nome => console.log("ola", nome) //para funcoes menores

saudacao('Zorzi') //zorzi - argumento ao executar function    parametro - definicao da funcao
 saudacao('leozera')

// function calculadoraDobroDeUm(numero){
//    return numero * 2
// }

//arrow function
const calculadoraDobroDeUm = numero => numero * 2

const numeroDobrado = calculadoraDobroDeUm(1000)
console.log(numeroDobrado)
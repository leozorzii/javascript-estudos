const pessoa = {
    nome: 'leonardo',
    idade: 19,
    profissao: 'developer'
}

// console.log(pessoa.nome)
// console.log(pessoa.idade)
const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

function saudacao({nome, idade}) {
    console.log('Ola,', nome + ' idade: ', idade)
}
saudacao(pessoa)

const frutas = ['uva', 'banana']

const[primeira, segunda] = frutas
// eh a mesma coisa que 
// const primeira = frutas[0]
// const segunda = frutas[1]
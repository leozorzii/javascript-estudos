const pessoa = {
    nome: 'Lepolepo'
}
const pessoa1 = {
    idade: 10
}

const eu = {...pessoa, ...pessoa1}

console.log(eu)
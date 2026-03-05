let camilo1 = {
    nome: 'camilo',
    idade: 29,
    profissao: 'developer',
}

const camilo2 = {...camilo1 }//spread


camilo2.idade = 30

console.log(camilo2)

camilo1 = {
    ...camilo2,//espalhar propriedades de um objeto
     profissao: 'developer senior',
     temCNH: true
}
console.log(camilo1)

const {nome, ...resto} = camilo1//restOperator

console.log(nome)
console.log(resto)
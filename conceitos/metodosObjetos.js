const pessoa = {
    nome: 'leonardo',
    idade: 19,
    pets: ['amora'],
    nacionalidade: 'brasileiro'
}

for(const chave in pessoa){
    console.log("chave:", chave)
    console.log('valor:', pessoa[chave])
}

//pegar todas as chaves e valores
const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)

const entradas = Object.entries(pessoa)
console.log('Chaves:', chaves)
console.log('Valores:', valores)
console.log('Entradas(chave/valor):', entradas)
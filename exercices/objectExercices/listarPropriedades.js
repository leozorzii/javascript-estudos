const pessoa = {
    nome: 'Leonardo Montagner de Zorzi',
    idade: 19,
    profissao: 'Software Enginner',
    cidade: 'Santa Maria - RS'
}

console.log("Ola, me chamo "+ pessoa.nome + ", tenho " + pessoa.idade + 
    " anos e sou " + pessoa.profissao )

    for(let chave in pessoa){
        console.log(`${chave}: ${pessoa[chave]}`) 
    }
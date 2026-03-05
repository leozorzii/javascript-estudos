const pessoas = [

    {nome: 'Leonardo', idade: 10},
    {nome: 'Jorge', idade: 19},
    {nome: 'Fernando', idade: 22}
]

for(let pessoa of pessoas){
    if(pessoa.idade >= 18){
        console.log(`${pessoa.nome} maior de idade`)
    }
}
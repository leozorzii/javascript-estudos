const pessoa = {
    nome: 'leonardo',
    idade: 19,
    temCNH: true
}

pessoa.sobrenome = 'Zorzi'

console.log("nome:", pessoa.nome)
console.log("sobrenome:", pessoa.sobrenome)

const livro = {
    titulo: 'o Hobbit',
}

livro.publicado = true
livro.idiomas = [
    'Ingles', 'PT-BR', 'Espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log("livro antes", livro)

delete livro.paginas

console.log("livro depois", livro)

livro['autor']

console.log("autor do livro: ", livro['autor'])


const autor = {
    nome: 'Mario Quintana',
    nacionalidade: 'brasileiro',
    idade: 80,
    livros: [livro]
}
livro.autor = autor

console.log(livro)

livro.autor.nome
livro.autor.nacionalidade
livro.autor.idade
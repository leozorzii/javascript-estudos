function Livro(titulo, autor){
    this.titulo = titulo
    this.autor = autor
    this.descrever = function () {
        return "O livro " + this.titulo + " foi escrito por " + this.autor + "."
    }
}

// const livro1 = new Livro('Dom Casmurro', 'Machado de Assis')
// const livro2 = new Livro('1984', 'George Well')

const livro = new Livro("O hobbit", "J.R.R. Tolkien")
console.log(livro.descrever())
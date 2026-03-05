const  readline = require('readline')//carrega uma biblioteca

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

leitor.question('Qual seu nome? ', (nome) =>{
    console.log('ola', nome)
    console.log('seja bem vindo')

    leitor.question('qual a sua idade?', (idade) => {

        if(idade>=18){
            console.log('voce pode tirar sua CNH')
        }else{
            console.log('voce nao pode tirar sua habilitacao')
        }
        leitor.close()
    })
} )
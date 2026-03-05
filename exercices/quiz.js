const readline = require('readline')//carrega uma biblioteca

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

console.log("Bem vindo ao Quiz de musica em JS!")
console.log("Responda com a alternativa correta: a,b ou c\n")

let acertos = 0;

leitor.question('(1)-Qual o ultimo album lancado do cantor Matue? \n(a) XTRANHO \n(b) 333 \n(c) Maquina do tempo\n ', (resposta1) =>{
    if(resposta1 == 'a'){
        console.log("boa!, XTRANHO foi o ultimo album lancado do tuezin\n")
         acertos++
    }
leitor.question('(2)-Qual a musica mais famosa do Drake? \n(a) Toosie Slide \n(b) Gods Plan \n(c) Shot for me\n', (resposta2) =>{
    if(resposta2 == 'b'){
        console.log("Gods plan esta correto!\n")
         acertos++
    }
leitor.question('(3)-Qual musica do Travis Scoot fez o Rock in rio quase virar um terremoto?\n(a) Goosebumps \n(b)Fein \n(c)Butterfly Efecct\n', (resposta3) => {
    if(resposta3 == 'b'){
        console.log("Exatamente foi Fein!\n")
         acertos++
    }
    if(acertos == 3){
        console.log("gabaritou!")
    }else if(acertos == 2){
        console.log("boa demais")
    }else if(acertos == 1){
        console.log("ate q ta bom")
    }else{
        console.log("pratique mais")
    }
    leitor.close();
        })
    })
})
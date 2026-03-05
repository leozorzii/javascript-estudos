// Imagine que você está desenvolvendo um sistema de avaliação 
// para um jogo educativo.Ao final de cada fase, o jogador 
// acumula uma pontuação total, e o sistema precisa avaliar se ele:

// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.
// Exemplo de entrada:

// avaliarDesempenho(82, gerarMensagem);

function avaliarDesempenho(pontuacao, callback){
    let stats = ""

    if(pontuacao >= 70){
       stats = "aprovado"
    }else if(pontuacao >= 50){
        stats = "reforco"
    }else{
        stats = "reprovado"
    }
    callback(pontuacao, stats)
}
function gerarMensagem(pontuacao, stats){
    console.log(`sua pontuacao: ${pontuacao}`)
    if(stats === "aprovado"){
        console.log("parabens voce esta aprovado!!")
    }else if(stats === 'reforco'){
        console.log("Voce precisa praticar mais")
    }else{
            console.log("voce foi reprovado!")
    }
}
avaliarDesempenho(10, gerarMensagem)

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.
// Exemplo de entrada:

// responderUsuario("Camila", mostrarResposta);
// Saída esperada (com 3 segundos de atraso):

// Processando sua pergunta...
// Olá, Camila! Aqui está a resposta para sua dúvida.
function responderUsuario(nome,callback){
    console.log("Processando sua pergunta...")
    
    setTimeout(() => {
    callback(nome)
}, 3000)
}
function mostrarResposta(nome){
    console.log(`ola, ${nome}! aqui esta a resposta de sua duvida:`)
}
responderUsuario('zorzi', mostrarResposta)

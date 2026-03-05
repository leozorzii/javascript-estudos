
const sortearNome = (lista) =>{
    const indice = Math.floor(Math.random() * lista.length)
    return lista[indice]
}

function avaliarPontuacao(pontuacao){
    if(pontuacao > 80){
        return "Parabens, voce foi premiado!"
    }else if(pontuacao >= 50){
        return "Voce quase conseguiu! fique de olhos na proximas"
    }else{
        return "infelizmente, nao foi dessa vez"
    }
}

function exibirResultado(participante){
    console.log("Sorteando...")
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`)
        console.log(`Pontuacao: ${participante.pontuacao}`)
        console.log(avaliarPontuacao(participante.pontuacao))
    }, 2000)

}
function realizarSorteio(lista){
    const sorteado = sortearNome(lista)
    exibirResultado(sorteado)
}

const participantes = [
    {nome: "Laura", pontuacao: 92},
    {nome: "Luis", pontuacao: 62},
    {nome: "Clara", pontuacao: 32}
]

realizarSorteio(participantes)
const tarefas = ['varrer', 'ler', 'levarLixo','dormir', 'rezar']
const concluida = [true, false, true, false, false]

tarefasNaoConcluidas = tarefas.filter(function(tarefa,index){
    return concluida[index] === false
})
console.log('tarefas pendentes:', tarefasNaoConcluidas)
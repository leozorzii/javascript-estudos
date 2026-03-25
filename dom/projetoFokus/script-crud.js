const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');

const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas')
const bntRemoverTodas = document.querySelector('#btn-remover-todas')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizarTarefas(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));//salva as tarefas na localstorage indepente se a pagina for atualizada
}

function adicionarTarefas(tarefa){
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#856cf1"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    ` 
    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao;
    paragrafo.classList.add('app__section-task-list-item-description')

    const button = document.createElement('button');
    button.classList.add('app_button-edit')
    //funcao para criar elemento da tarefa e modificar para incluir botao de edicao 
    function criarElementoTarefa(tarefa){
        const li = document.createElement('li');
        li.classList.add('app__section-task-list-item');


    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add("app_button-edit");
    buttonEdit.innerHTML = "Editar";
    buttonEdit.onclick = function (){
        editarTarefa(tarefa, li);
    };
    li.append(buttonEdit);
    return li;
    }

    function editarTarefa(tarefa, elementoTarefa){
        const descricaoEditada = prompt("Edite a tarefa", tarefa.descricao);
        if(descricaoEditada !== null && descricaoEditada.trim() !== ''){
            tarefa.descricao = descricaoEditada;
            //atualizar interface do usuario aqui e o localStorage
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            //atualizar a view da tarefa na lista
            elementoTarefa.querySelector('p').textContent = descricaoEditada;
        }
    }

    button.onclick = () => {
        //debugger //indicar pro navegador que vou debuggar
       const novaDescricao =  prompt("Qual o novo nome da tarefa?");//pega a nova descricao
       //console.log('nova descricao da tarefa: ', novaDescricao);
       if(novaDescricao !== null && novaDescricao !== ""){
        paragrafo.textContent = novaDescricao;//adiciona ao paragrafo
        tarefa.descricao = novaDescricao;//atualiza a referencia da tarefa
        atualizarTarefas();//update na local storage
        alert("Tarefa Atualizada com sucesso");
       }else{
        alert("Atualizacao cancelada ou valor invalido");
       }
    }


    const imageButton = document.createElement('img');
    imageButton.setAttribute('src', './imagens/edit.png');

    button.append(imageButton);

    li.append(svg);
    li.append(paragrafo);
    li.append(button);
    
    //persisir tarefa na local storege e remonta-la baseada no nosso estagio
    if(tarefa.completa){
        li.classList.add('app__section-task-list-item-complete');//deixa o complete com icone verde
        button.setAttribute('disabled','disabled');
    }else { 
        li.onclick = () =>{
         document.querySelectorAll('app__section-task-list-item-active')
            .forEach(elemento =>{
                elemento.classList.remove('app__section-task-list-item-active');
            })
         if(tarefaSelecionada == tarefa){
            paragrafoDescricaoTarefa.textContent = '';
            tarefaSelecionada = null;
            liTarefaSelecionada = null;
            return;
         }
        tarefaSelecionada = tarefa;
        liTarefaSelecionada = li;
        paragrafoDescricaoTarefa.textContent = tarefa.descricao;
        li.classList.add('app__section-task-list-item-active');
    }
}

   

    return li;

}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');//faz a alternancia da classe hidden
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();//impedir comportamento padrao
   const tarefa = {
    descricao: textArea.value
   } 
   if (!tarefa.descricao) return;//para nao poder salvar tarefa vazia
   tarefas.push(tarefa);
   const elementoTarefa = adicionarTarefas(tarefa);
   ulTarefas.append(elementoTarefa);
   atualizarTarefas();
   textArea.value = '';
   formAdicionarTarefa.classList.add('hidden')
})//evento de submeter

tarefas.forEach(tarefa =>{
    const elementoTarefa = adicionarTarefas(tarefa);
    ulTarefas.append(elementoTarefa);
});

document.addEventListener('focoFinalizado', () => {//ouvinte do foco finalizado
    if(tarefaSelecionada && liTarefaSelecionada){//tarefa select e referencia(li)
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');//deixa o complete com icone verde
        liTarefaSelecionada.querySelector('button').setAttribute('disabled','disabled');//procura elemento botao dentro dessa tarefa
        tarefaSelecionada.completa = true;
        atualizarTarefas()
    }
})

const removerTarefas = (somenteCompletas) => {
    const seletor = somenteCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item"
    document.querySelectorAll(seletor).forEach(elemento =>{
        elemento.remove();
    })
    tarefas =  somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : [];
    atualizarTarefas();
}

btnRemoverConcluidas.onclick = () => removerTarefas(true);
bntRemoverTodas.onclick = () => removerTarefas(false);
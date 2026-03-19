//serve carregamento da aplicacao, manipulcao de formulario e submit dos dados
import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () =>{
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById('pensamento-form')
    const botaoCancelar = document.getElementById("botao-cancelar")
    formularioPensamento.addEventListener("submit", manipularSubmissaoForm)
    botaoCancelar.addEventListener("click", cancelarPensamento);
});//carregar o arquivo

async function manipularSubmissaoForm (event){
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value;
    const conteudo = document.getElementById("pensamento-conteudo").value;
    const autoria = document.getElementById("pensamento-autoria").value;

    try{
        if(id){
            await api.editarPensamento({id, conteudo, autoria})
        }else{
            await api.salvarPensamento({conteudo, autoria})  
        }
      ui.renderizarPensamentos();
    } catch {
        alert("Erro ao salvar pensamentos");
    }
}
function cancelarPensamento(){
    ui.limparFormulario();
}
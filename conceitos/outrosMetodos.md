1 .append() - adiciona multiplos nos e/ou strings de texto ao final de um elemento

2 .appendChild() - inserir um unico no no final do elemento selecionado(nao aceita strings)

exemplo: 
{
let div = document.querySelector("div");
let novoSpan = document.createElement("span");
div.appendChild(novoSpan);
}

3 .prepend() - insere conteudo no inicio de um elemento selecionado
util para quando voce quer adicionar um elemento no topo de uma lista ou no comeco de um container

exemplo: 
{
let lista = document.querySelector("ul");
lista.prepend("Item 0");  
}

4 .insertBefore() - inserir um elemento antes de outro

exemplo{
let novoItem = document.createElement("li");
novoItem.textContent = "Item intermediário";
let lista = document.querySelector("ul");
let itemEspecifico = document.querySelector("#itemEspecifico");
lista.insertBefore(novoItem, itemEspecifico); // Insere o novo item antes do item especificado.   
}

5 .insertAdjacentElement(), .insertAdjacenteHTML(), .insertAdjacenteText() - oferecem controle preciso sobre onde voce deseja inserir um novo elemento, seja texto
ou html ou elemento
exemplo
{
let div = document.querySelector("div");
div.insertAdjacentHTML('beforebegin', '<p>Antes da div</p>');
div.insertAdjacentHTML('afterend', '<p>Depois da div</p>');
div.insertAdjacentHTML('afterbegin', '<p>No começo da div</p>');
div.insertAdjacentHTML('beforeend', '<p>No final da div</p>');.  
}

6 replaceChild() - substitui um filho pelo outro
serve para atualizar um elemento por um novo

exemplo 
{
let lista = document.querySelector("ul");
let antigoItem = document.querySelector("#antigoItem");
let novoItem = document.createElement("li");
novoItem.textContent = "Item substituto";
lista.replaceChild(novoItem, antigoItem); // Substitui o item antigo pelo novo.    
}

7 .cloneNode() - duplica um elemento
se precisar de uma copia exata de um elemento (com ou sem seus filhos), este método é perfeito.

exemplo 
{
let item = document.querySelector("li");
let itemDuplicado = item.cloneNode(true); // Com "true" ele copia todos os filhos do item.
document.querySelector("ul").appendChild(itemDuplicado);    
}

const listaDeCompras = ['milho', 'tomate', 'feijao', 'arroz'];

console.log(`segundo item da lista: ${listaDeCompras[1]}`);
 
listaDeCompras[listaDeCompras.length - 1] = 'fruta';

console.log('lista apos modificacao: ', listaDeCompras);
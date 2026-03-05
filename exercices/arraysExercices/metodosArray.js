const numeros = [12,34,55,68,90];

console.log(`adiciona ao array - push`)
numeros.push(67);//adicionar ao array
console.log(numeros);

console.log('remover ultimo numero do array - pop')
numeros.pop();//remover ultimo numero do array
console.log(numeros);

console.log('retorna o indice do numero - indexOF')
const elemento = numeros.indexOf(68)//retorna o indice daquele valor
console.log(elemento)

console.log('pega partes do array - slice')
const novoArray = numeros.slice(2);//pegar uma parte do array(um trecho)
console.log(novoArray);

//CALLBACK
console.log('CALLBACK')

const arrNumeros = [12,32,44,55,67];
console.log('mapeia o array e itera o parametro do callback e depois guarda no novo array.')
const arrayCalculado = arrNumeros.map((num)=>{//mapeia o array e itera o parametro do callback e depois guarda no novo array.
    return num + 10;
} )
console.log(arrayCalculado)

//for reach
arrNumeros.forEach((num,i)=>{
    console.log(`o numero ${num} esta no indice ${i}`);
})

console.log(`flitrar array de acordo com condicao`)
const arrayFiltrado = arrNumeros.filter(num => num % 5 === 0);

console.log(arrayFiltrado);
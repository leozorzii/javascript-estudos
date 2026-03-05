const frutas = ['laranja', 'maca', 'kiwi', 'morango', 'pera']
//uva = 0
//morango = 4
//console.log(frutas)

console.log('primeira fruta:', frutas[0])
console.log('ultima fruta:', frutas[4])

frutas.push('melancia')//adicionar ao vetor
console.log('total de frutas: ', frutas.length)

console.log('ultima fruta: ',frutas[frutas.length -1])

frutas.splice(2, 1)//remover itens do vetor, passando indice e quantos remover
console.log('frutas depois de remover', frutas)

//formas diferentes de fazer lacos de rep.

for(let i = 0; i < frutas.length; i++){
    console.log('indice: ',i )
    console.log(frutas[i])
}


frutas.forEach(( valor, indice ) => {
    console.log('indice: ', indice, valor)
})

for (const fruta of frutas) {
console.log('fruta da vez: ', fruta)
}

//for tradicional → o mais antigo e mais detalhado

// forEach → método moderno e direto para arrays

// for/of → sintaxe simples e elegante, ideal para percorrer valores
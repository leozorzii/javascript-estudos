// Um Map é uma estrutura que permite armazenar pares de chave e valor, semelhante a um objeto, mas com algumas vantagens importantes:

// Pode usar qualquer tipo de dado como chave (inclusive objetos).

// Mantém a ordem em que os itens foram inseridos.

let mapa = new Map()

mapa.set('nome', 'leonardo')
mapa.set('idade', 19)

console.log(mapa.get('nome'))
console.log(mapa.get('idade'))

// Quando usar um Map?
// Para armazenar informações associadas a uma chave específica.
// Quando precisar manter a ordem de inserção.
// Para usar chaves que não sejam strings.

//exemplo
let chaveDaFuncao = function(){}
let chaveObjeto = {}

let mapaVariado = new Map()

mapaVariado.set(chaveDaFuncao, 'funcao 131') //Valor para função 

mapaVariado.set(chaveObjeto, 'valor 1222') //Valor para objeto

console.log(mapaVariado.get(chaveDaFuncao))

console.log(mapaVariado.get(chaveObjeto))

// Diferença entre Set, Map e Array
// Array: Guarda valores em ordem e permite duplicatas.

// Set: Guarda valores únicos, sem duplicatas.

// Map: Guarda pares de chave e valor com chaves únicas e ordenadas.
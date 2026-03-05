//Um Set é uma estrutura de dados que guarda valores únicos. 
// Pense nele como uma coleção onde nenhum valor pode se repetir, 
// diferente dos arrays onde você pode ter elementos iguais.

let numeros = new Set()

numeros.add(1)
numeros.add(2)
numeros.add(2)//nao sera add novamente


console.log(numeros)

// Quando usar um Set?
// Para remover duplicatas de um array.
// Para verificar rapidamente se um valor já existe no conjunto.

//exemplo
let arrayComDuplicados = [1,2,2,3,4,4,5]
let arraySemDuplicados = [...new Set(arrayComDuplicados)]

console.log("array sem duplicados:", arraySemDuplicados)
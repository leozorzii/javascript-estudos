const frutas = ['laranja', 'maca', 'kiwi', 'morango', 'pera']

frutas.push('melancia')

console.log('array antes da remocao: ', frutas)

frutas.splice(0, 1)

console.log("array final:", frutas)
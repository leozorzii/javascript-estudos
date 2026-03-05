const frutas = ['banana', 'goiaba', 'laranja']

const maisFrutas = ['uva', 'morango', 'kiwi']

const clone = [...frutas]

const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('pitanga')
console.log('1',frutas)
console.log('2',maisFrutas)
console.log('3',clone)
console.log('4',todasAsFrutas)


const [primeira, segunda, ...restante] = todasAsFrutas
console.log(primeira)
console.log(segunda)
console.log(restante)

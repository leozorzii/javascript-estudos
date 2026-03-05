const agora = new Date()


console.log(agora)
console.log('Ano:', agora.getFullYear())
console.log('Mes(0-11):', agora.getMonth())
console.log('Dia:', agora.getDay())
console.log('hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())



const nascimento = new Date('2006-07-12:16:30:00.000Z')
console.log('nascimento:', nascimento)
//formato normalizado de datas
console.log('data formatada(BR)', nascimento.toLocaleDateString('pt-BR'))
console.log('data formatada(BR)', nascimento.toLocaleDateString('en-US'))

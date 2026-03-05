function saudacao(){
console.log('ola')
}
//tempo de espera(serve para notificacao no front-end, ou tempo para enviar email no back-end)
setTimeout(saudacao, 2000) //ms

let contador = 0

const id = setInterval(() => {
    contador++
    console.log('tempo decorrido:', contador)
    if(contador == 10){
        clearInterval(id)
    }
}, 1000)

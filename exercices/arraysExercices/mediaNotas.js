const notas = [10, 4 , 10, 6]
let somaDasNotas = 0

for(let nota of notas){
    somaDasNotas += nota
}

somaDasNotas/notas.length

if(somaDasNotas >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado')
    }
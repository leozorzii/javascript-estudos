const idades = [14, 9, 44, 69]

const filtroDeIdade = idades.filter((idade)=>{
    if(idade >= 18){
        console.log('idades consideradas de maior: ', idade)
    }
})
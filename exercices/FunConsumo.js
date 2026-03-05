const nomeAparelho = "Micro Ondas"
const consumo = calcularConsumo(150, 4)
const classificacao = classificarConsumo(consumo)
exibirResumo(nomeAparelho, consumo, classificacao)

function calcularConsumo(potencia, horasPorDia){
    return (potencia * horasPorDia * 30)/1000
}
function classificarConsumo(consumo){
    if(consumo < 50){
        return "Baixo Consumo"
    }else if(consumo < 200){
        return "Consumo Moderado"
    }else{
        return "Alto Consumo"
    }
}
function exibirResumo(nomeAparelho, consumo, classificarConsumo){
    console.log(`${nomeAparelho} tem consumo de ${consumo}kWh/mes e se classifica como ${classificarConsumo}`)
}

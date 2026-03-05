//revisando

const soma = (num1, num2) => {
    console.log(num1 + num2)
}

const boasVindas = nome => `ola, ${nome}`


//calcular juros compostos
//funcao deve receber valores no formato inteiro: valor, % de juros e tempo
// formula: valor * (juros elevado ao tempo)

const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros / 100) + 1;
    
    return valor * Math.pow(taxaJuros, tempo)
}

console.log(calculaJuros(1000, 5, 2))

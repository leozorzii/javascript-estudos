function calculaDesconto(valor, perDesconto = 10){
 const valorFinal = valor - (valor * perDesconto/100)
 return valorFinal
}
console.log(calculaDesconto(100,20))
console.log(calculaDesconto(100))

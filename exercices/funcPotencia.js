function calculaPotencia(num, pow){
    let resultado = 1;
    for(let i = 0; i < pow; i++){
        resultado = resultado * num;
    }
    return resultado;
}
console.log(calculaPotencia(4,3))
console.log(calculaPotencia(4,5))
console.log(calculaPotencia(4,3))
console.log(calculaPotencia(5,5))
console.log(calculaPotencia(3,4))



const verificarParidade = (num) => {
    if(num %2 ===0){
        return 'PAR!'
    }else{
        return "IMPAR!"
    }
}
console.log(verificarParidade(5))
console.log(verificarParidade(8))

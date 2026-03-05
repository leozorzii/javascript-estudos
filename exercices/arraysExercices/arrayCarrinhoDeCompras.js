let produtosCarrinho = [20, 50, 100, 15]
let valorTotal = 0
for(let preco of produtosCarrinho){
    valorTotal += preco
} 
 console.log("valor total da compra:", valorTotal)

let desconto = valorTotal * 0.8
console.log('preco dos produtos com desconto:R$ ', desconto)
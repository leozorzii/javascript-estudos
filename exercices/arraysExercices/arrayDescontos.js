let precosDeProdutos = [10.99, 15.00, 12.99, 5.50]

let desconto = precosDeProdutos.map(function(preco){
    return preco * 0.9
})
console.log("preco dos produtos com desconto:", desconto)
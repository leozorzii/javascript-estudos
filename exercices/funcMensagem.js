 function processarPedido(nome, tipo, callback){
    console.log(`Processando pedido de ${nome}...`)
    callback(nome,tipo) 
}
 function mensagemPersonalizada(nome, tipo){
     if(tipo === "vip"){
        console.log(`Obrigado pela preferencia, ${nome}!, voce ganhou frete gratis.`)
    }else if(tipo === 'novo'){
        console.log(`Bem vindo(a), ${nome}! Aproveite um cumpom de boas vindas `)
    }else if(tipo === 'comum'){
        console.log(`Obrigado pela sua compra, ${nome}.`)
    }
 }
 
 
 
 
 
 processarPedido('Leonardo','vip', mensagemPersonalizada)
 processarPedido('Luiza', 'novo', mensagemPersonalizada)
 processarPedido('Luiz', 'comum', mensagemPersonalizada)
 
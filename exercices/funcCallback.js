//exemplo
// setTimeout(function() {
//     console.log('ola, mundo!');
// }, 2000)

// //exemplo arrow function
// setTimeout (() => console.log('ola, mundo!'), 2000)

// //exemplo 2

// setTimeout(exibeFrase, 5000)
// function exibeFrase(){
//     console.log('ola, mundo!')
// }

//criar uma funcao que faca operacoes matematica entre 2 valores(soma e multiplicacao)
//funcao deve receber por parametro: operacao desejada, valor1, valor2

function soma(a,b){ return a + b};

function multiplica(a,b){ return a * b};

function calcula(fnOperacao, valorA, valorB){
    return fnOperacao(valorA, valorB)
}
console.log(calcula(soma, 5, 5))
console.log(calcula(multiplica, 5, 5))


//criar uma funcao que emita uma mensagem caso o usuario x nao esteja interagindo com o sistema apos quantidade y de tempo

 const userID = '4544561';
 //const avisaUsuario = userID => console.log(`sessao de ${userID} esta inativa`);

// setTimeout(avisaUsuario, 2000, userID);

setInterval((userID) => console.log(`sessao de ${userID} esta inativa`), 3000, userID)
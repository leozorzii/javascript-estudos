#O que é JSON?
JSON significa JavaScript Object Notation, ou seja, 
"notação de objeto do JavaScript".
 Apesar do nome complicado, JSON é só uma forma de escrever dados como texto 
 — uma forma que é muito parecida com os objetos que você já está usando!

{ 

"nome": "João", 

"idade": 30, 

"temCarteira": true 

} 

Percebeu a semelhança? A grande diferença é que:

Em JSON, as chaves são sempre escritas entre aspas duplas (");

JSON é sempre uma string de texto, não um objeto vivo de JavaScript.

Quando usamos JSON?
O JSON é usado para trocar dados entre sistemas. 
Por exemplo, quando um site busca informações em um servidor, os dados geralmente vêm em formato JSON.

Exemplo:

let respostaDoServidor = '{"nome":"João","idade":30}'; 

Isso é uma string! Para transformar em objeto e poder acessar normalmente, usamos:


let objeto = JSON.parse(respostaDoServidor); 

console.log(objeto.nome); // Resultado: João 

Se quisermos fazer o contrário — transformar um objeto em texto JSON — usamos:


let pessoa = { nome: 'João', idade: 30 }; 

let json = JSON.stringify(pessoa); 

 

console.log(json); // Resultado: '{"nome":"João","idade":30}' 

JSON é universal
JSON é usado por praticamente todas as linguagens de programação modernas, o que torna ele perfeito para integrar diferentes sistemas (um site em JavaScript conversando com um backend feito em Python, por exemplo).

Resumo prático
- Objeto = estrutura viva no código JavaScript.
- JSON = formato textual que representa dados.
- Para converter JSON em objeto, usamos JSON.parse().
- Para converter objeto em JSON, usamos JSON.stringify().
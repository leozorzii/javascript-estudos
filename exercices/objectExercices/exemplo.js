const user = {
    name: 'Leozorzi',
    nascimento: '2006-07-12',
    cpf: '0221344369',
    pontuacao: 4231,
    trofeus: ['FNCS', 'FACup']
};

user.calcularIdade = function calcularIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0,4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`idade eh: ` + idade);
}

user.calcularIdade()

console.log(Object.values(user));
console.log(Object.entries(user));
for(const info in user){
    const texto = `chave ${info}, valor do tipo ${typeof user[info]}`;
    console.log(texto)
}
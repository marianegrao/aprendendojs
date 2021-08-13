const pessoa = {
    nome: 'Maria',
    idade: 2,
    endereco:{
        logradouro: 'MissJane', 
        numero: 2700
    }
}

const { nome, idade} = pessoa //criou uma constante 'nome' e 'idade' apartir do obj pessoa
console.log(nome, idade)

const {nome: n, idade:i} = pessoa // definiu 
console.log(n, i)

const { endereco: { logradouro, numero }} = pessoa
console.log(logradouro, numero)

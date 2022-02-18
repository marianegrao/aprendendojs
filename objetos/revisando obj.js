// obj funciona com o mecanismo de chave e valor.
// modo não usual
const loja = new Object
loja.clienteOuro = 'Roberto' // cria um objeto a partir de uma constante
loja['fornecedores'] = 'Empresa 1, empresa 2'

console.log (loja)
delete loja['fornecedores']
console.log (loja)

// criaçao literal de objetos
const carro = {
    proprietario: {
        nome: 'Raul',
        endereço: {
            logradouro: 'Rua Newton', // é possivel ter um objeto dentro do outro
            numero: 772
        }
    }, // não esquecer da virgula
    condutores: [{ // atributo 'condutores' recebe objetos inseridos dentro de um array.
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    cacularValorSeguro () { 
        // [...]
    }
}

console.log(carro.proprietario.endereço.numero) // mostra uma dado especifico do obj 'carro' de acordo com as coodernadas dadas.
carro.proprietario.endereço.numero = 1000 // tambem altera valor 
console.log(carro.proprietario.endereço.numero)

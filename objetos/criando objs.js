// usando a notaçao literal 
const obj1 = {}
console

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

// Funçoes construtoras
function produto (nome, preco, desc) {
    this.nome = nome // não esta encapsulada, fica visivel e alteravel fora do objeto.
    this.getPrecoComDesconto =() => {
        return preco * (1-desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15) // instanciei um obj 'p1' a partir da funçao 'produto'
console.log(p1.nome) // posso alterar pois o atributo 'nome' está visivel para todo sistema.
console.log(p1.getPrecoComDesconto())

// Função Factory
function salarioDoFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        faltas,
        getSalario() {
            return (salarioBase /30) * (30 - faltas)
        }
    }
}

const f1 = salarioDoFuncionario ('Maria', 11400, 1)
console.log(f1.getSalario())

// Object.creat: será melhor aprofundado futuramente.
//const filha = Object.create(null)
//filha.nome = 'Ana'
//console.log(filha)

// JSON em objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // acessei o atributo 'info' do obj formado a partir da transformação do JSON 
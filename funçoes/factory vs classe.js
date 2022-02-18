// retornando novos objs a partir de uma classe
class Pessoa {
    constructor(nome) {
        this.nome = nome // 'this' varia no console
    }
    falar(){
        console.log(`Com classe, meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa ('Maria')
p1.falar()

console.log(typeof constructor)
console.log(typeof falar)

// funçao factory
const criarPessoa = function (nome) {
    return {
        falar: () => console.log(`Com factory, meu nome é ${nome}.`)
    }
}

const p2 = criarPessoa ('Marta')
p2.falar()

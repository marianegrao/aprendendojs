/*
 class Pessoa { // nao recebe parametro
    constructor(nome) {
        this.nome = nome // 'this' varia no console
    }
    falar(){
        console.log(`Com classe, meu nome é ${this.nome}.`)
    }
}
*/

function Pessoa (nome) {
     this.nome = nome
     this.falar = function() {
            console.log(`Com funçao construtora, meu nome é ${this.nome}.`)
        }
    }

const p1 = new Pessoa ('Maria')
p1.falar()

function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado (let ou const): pertence somente ao escopo dessa funçao ('carro')
    // nao vou consegir acessar velocidadeAtual diretamente do obj instanciado(criado). 
    let velocidadeAtual = 0

    // metodo publico (this)
    this.acelerar = function () { // this torna visivel p fora da funçao
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta // pode somar vel.atual com delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const Evoque = new Carro (350, 25)
Evoque.acelerar()
Evoque.acelerar()
Evoque.acelerar()
console.log(Evoque.getVelocidadeAtual())

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log(typeof Carro)  // molde
console.log(typeof Evoque) //
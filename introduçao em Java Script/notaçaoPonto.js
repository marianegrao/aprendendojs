function Obj(nome) {
    this.nome = nome // faz a variavel ficar visil fora da funçao. o escopo passa a ser global
}
const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
console.log(typeof this)
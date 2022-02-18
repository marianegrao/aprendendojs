// formas de chamar uma funçao: call'()' e apply'[]'
function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const tablet = {
    preco: 2300,
    desc: 0.10,
    imposto: 0.10,
    getPreco
}

console.log(getPreco()) // nao acessa o preco e desc, pois nao estão definidos no escopo global e sim dentro de um obj (e o this nao tem acesso a eles)
console.log(tablet.getPreco())

const camera = {
    preco: 5000,
    desc:0.20
}

console.log(getPreco.call(camera, 0.12, '$'))
console.log(getPreco.apply(camera, [0.12, '$']))

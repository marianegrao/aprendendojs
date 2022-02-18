// Funçao Object.keys: pega somente as chaves da coleçao de chave-valor dos objetos
// Funçao Object.values: pega somente os valores da coleçao de chave-valor dos objetos
// Funçao Object.entries: pega os valores da coleçao de chave-valor dos objetos

const pessoa = {
    nome: 'Ceci',
    idade: 2,
    peso: 14
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // cada par chave-valor vira um sub-array

Object.entries(pessoa).forEach(([chave, valor]) => { // descrun
    console.log(chave + ' - ' + valor)
})

// setando parametros de uma variavel. permite ter mais controle sob o codigo
Object.defineProperty(pessoa, 'dataNascim',{
    enumerable:true,
    writable: false,
    value: '9/09/2021'
})
console.log(Object.entries(pessoa))

// Object.assing: reune os objetos selecionados dentro de um objeto inicial
const objInical= {a:1}
const objSelecionado1 = {b: 2}
const objSelecionado2 = {c: 3}
const objSelecionado3 = {d: 4, a: 0} // o valor de 'a' será sobrescrito.
const objFinal = Object.assign(objInical, objSelecionado1, objSelecionado2, objSelecionado3)

console.log (objFinal)

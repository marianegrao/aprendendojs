// Estrutura for/in
// percorrendo os indices do array 
const notas = [4, 5, 6, 7, 8, 9, 10]
for (let i in notas) {
    console.log (i, notas[i])
}

// percorrendo os atributos do objeto 
const pessoa = {
    nome: 'Maria',
    sobrenome: 'Negrao',
    idade: 18,
    ocupaçao: 'universitária'
}
for (let atributos in pessoa) {
    console.log(atributos + ' = ' + pessoa[atributos])
}
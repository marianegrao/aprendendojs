const peso1 = 1
const peso2 = 2
const avaliaç1 = 7.75
const avaliaç2 = 5.45

console.log(Number.isInteger (peso1)) // serve para verificar o numero é inteiro ou nao
console.log(Number.isInteger (avaliaç1))

const total = avaliaç1 * peso1 + avaliaç2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // serve para delimitar o numero de casas decimais
console.log(media.toString(2)) // em binario

console.log('14' / 7) // interpreta essa string como number
console.log('3' + 3) // interpreta como string e faz a concatenaçao
console.log(0.1 + 0.7)
console.log((15.546).toFixed(2))
console.log(7/0)
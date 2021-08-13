const a = 7
let b = 3

const soma = a + b
b += a // b = b + a
console.log(b) // deixou de 3 e passou a ser 10
console.log(soma)

const subtracao = b - 4
b -= 4 // b = b - 4
console.log(b) // 10 - 4
console.log(subtracao)

const multiplicacao = b * 2
b *= 2 // b = b*2
console.log(b)
console.log(multiplicacao)

const modulo = a % 2 // divide o resultado da equaçao por 2. se = 0, numero é par. 
console.log(modulo)

console.log("Operadores: relacionais...") // resultado sempre vai ser true ou false
console.log('01)', '1' == 1)
console.log('02)', '1' === 1) // um é do tipo string e outro do tipo number
console.log('02)', '1' !== 1)
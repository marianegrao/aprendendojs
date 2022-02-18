// estrategia 01 de estabelecer valor padrao com 'ou'
console.log('Soma 1:')
function soma1 (a,b,c) {
    a = a || 1 // se nao houver valor para 'a', irá ser utilizado o 1
    b = b || 1
    c = c || 1
    return a + b + c
} 

console.log(soma1(), soma1(2), soma1(0,0,0)) //o zero resolve para falso, entao ele pega o valor padrao preestabelecido.

// estrategia 02, 03 e 04 para gerar valor padrao
console.log('Soma 2:')
function soma2 (a,b,c) {
    a = a !== undefined ? a: 1 // Se verdadeiro para a comapraçao, utilizará o valor 1
    b = 1 in arguments ? b: 1 // dentro do indice 1 existe o valor de b? se nao, utilize o valor padrao 1
    c = isNaN(c) ? 1: c // se for um numero, retorne o valor de c. mas se nao for um numero, retorne o valor padrao
    return a + b + c
} 
console.log(soma2(), soma2(2), soma2(0,0,0))

// estrategia 05 com o es2015
console.log('Soma 3:')
function soma3 (a=1,b=1,c=1) {
    return a+b+c
}
console.log(soma3(), soma3(2), soma3(0,0,0))

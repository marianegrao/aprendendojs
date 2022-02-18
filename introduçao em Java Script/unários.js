let num1 = 1
let num2 = 2

num1++ // adiciona mais um (1+1)
console.log(num1)
--num1 // 2-1 // é mais apressado para ser declarado pois ele vem antes da variavel
console.log(num1)

console.log(++num1 === num2--) // true pois o num2 so foi alterado apos a comapraçao. evitar fazer varias operaçoes numa mesma expressao
console.log(num2)
console.log(num1 === num2) 
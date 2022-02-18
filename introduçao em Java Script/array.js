/* array: é uma forma de agrupar multiplos valores 
(de forma linear, um elemento atras do outro)
em uma unico identificador
*/ 
const valores = [14, 27, 30] 

console.log(valores[2], valores[0]) // mostra o numero identificado pelas posiçoes
console.log(valores)

valores[3]= 32 // adicionou na posiçao 3 o numero 32
console.log(valores)
console.log(valores.length) // quantidade de elementos

valores.push({id: 3}, false, null, 'my name is...')
console.log(valores)

console.log(valores.pop()) // deleta e diz qual é o ultimo dado
console.log(valores)

delete valores [1] // deletou o numero que estava na posiçao 1 (27)
console.log(valores)


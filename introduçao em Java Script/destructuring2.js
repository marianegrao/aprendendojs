const [a] = [10] // o 'a' entre cochetes indica o operador destructuring. cochete do lado esquerdo significa um destructuring!
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10,7,9,8] // de dentro do arrey '[10, 7, 9, 8]' ele tirou '10 9 undefined 0' 
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,8,8], [9,6,8]]
console.log(nota)


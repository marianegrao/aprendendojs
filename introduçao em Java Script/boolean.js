let isAtivo = 1
console.log(isAtivo)
console.log(!isAtivo) // ! = nao  !! = nao nao = sim
console.log(!!isAtivo) // entao o número "1" se comorta como true

console.log('os verdadeiros...')
console.log(!!' ')

console.log('os falsos...')
console.log(!!0)
console.log(!!'') 

let nome = ''
console.log(nome || 'Usuário não identificado') 
// como a variavel 'nome' está vazia (considerada como falsa: linha 11), o programa retornou a string


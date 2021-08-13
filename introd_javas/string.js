const nome = "Maria1" // m = 0, a = 1, r = 2 ...
const escola = "Cod3r"

console.log(nome.charAt(2))
console.log(nome.charCodeAt(2)) // valor na tabela unicode ou tabela aske
console.log(nome.indexOf('1')) // localiza o numero na const

console.log(nome.substring(1,5)) // vai da posicao 1 ate a 5 mas nao inclui o caractere q ta na 5 poisiçao
console.log(nome.replace(1, 'a')) // troca o numero selecionado pela letra
console.log('Cecilia, Maria, Delandia'.split(','))

const concatenacao = 'Olá ' + nome + ' !'
console.log(concatenacao)
console.log(`Olá 
           ${nome} !`) // suporta quebra de linha

const up = texto => texto.toUpperCase()
console.log(`É melhor ter bastante ${up('paciência!')}`)
console.log(`e muita ${up('calma!')}`)

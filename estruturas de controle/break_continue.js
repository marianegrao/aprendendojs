// break influencia no laço for, while e switch 
// continue influencia no laço for e while. para repetiçao atual e vai para proxima
// esse uso é desencorajado, utilixar so quando for realmente necesario

const nums = [1,2,3,4,5,6,7,8,9,10]

console.log('Exemplo 1: For')
for (let i in nums) { // i = indice (indica posiçao do numero no array)
    if (i == 5) {
        break // quando chegar no numero 5 ele nao executa o codigo abaixo e para no indice 4
        // age no for e nao no if
    }
    console.log(i + ' = ' + nums[i])
}

console.log('Exemplo 2: Continue')
for (let y in nums) {
    if (y == 5) { // quando ele encontra o indice 5, ele pula e volta a execultar o restante do codigo.
        continue
    }
    console.log(y + ' = ' + nums[y])
}

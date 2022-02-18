function getNumeroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)  
}

let num

do { // realiza a primeira repetição
    num = getNumeroAleatorioEntre (-1, 10) // a variavel recebeu um valor
   // console.log('O numero sorteado foi: ' + num)
    console.log(`O numero sorteado foi: ${num}.`)
} while (num != -1)

console.log('Sorteio realizado com sucesso!')
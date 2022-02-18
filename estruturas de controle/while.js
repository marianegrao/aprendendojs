function getNumeroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min // sentença para selecionar um numero aleatorio entre o min e max estabelecidos.
    return Math.floor(valor)  
}

let obj = 0 // se fosse -1, nao daria continuidade pois a premissa seria falsa.

while (obj != -1) { // enquanto for true vai continuar executando. quando for false, ele sai do laço.
    obj = getNumeroAleatorioEntre (-1, 10)
    console.log('O numero sorteado foi: ' + obj)
}

console.log('Sorteio realizado com sucesso!')

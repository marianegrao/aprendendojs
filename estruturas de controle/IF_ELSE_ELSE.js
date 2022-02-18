Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <= fim
}

const resultado = function (nota) {
    if (nota.entre(9,10)) {
     console.log("Parabens, voce faz parte do nosso quadro de honra!")
    } else if (nota.entre(7, 8.99)) {
        console.log('Voce foi aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Voce esta de recuperaçao')
    } else if (nota.entre(0, 3.99)) {
        console.log('Voce esta reprovado')
    } else{
        console.log('Nota inválida')
    }
}

resultado(10)
resultado(7)
resultado(5)
resultado(2.33)
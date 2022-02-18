const imprimirResultado = function(nota) {
    if (nota >= 7){ // se falso, vai pro ELSE
        console.log('Parabens, voce foi aprovado!')
    } else{
        console.log('Infelizmente voce foi reprovado.')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Vixe') // ele faz comparaçao da string no IF o resultado é falso entao imprime a condiçao ELSE

function BoaNoticia (nota) {
    if (nota >= 7) {
        console.log('Aprovado com sucesso! Nota: ' + nota)
    }
} 

BoaNoticia (8)
BoaNoticia (6) 

function verdades (valor) {
    if (valor) { // so mostra 'valor' se for true. caso queira falso, seria: (!valor)
        console.log ('A linguagem JS converte para verdadeiro: ' + valor)
    }
}

verdades(NaN) // converte para false por isso não é exibido
verdades (-1) 
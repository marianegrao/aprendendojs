/* funçao: receita de bolo. verbo uma açao. executa uma açao
 bloco de codigo nomeado que pode ser 'reutilizado' varias vezes
 parametros de entrada: dados
 pode receber dados e retornar um resultado
     receber dados e nao retornar um resultado
*/

// funçao sem retorno:

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(7,8)
imprimirSoma(7, 8, 9, 20)

// com retorno:
function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3)) // o b que incialmente era 1 passou a ser 3
console.log(soma(2)) // entende q o b é igual a um

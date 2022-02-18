const resultado = function(nota) {
    switch (Math.floor(nota)) { // nao resolve para true ou false
        case 10: // como está vazio, ele pula para o proximo.
        case 9:
            console.log('Quadro de honra')
            break // serve para ele resolver apenas o case e sair.
                  // caso ao contrario, o padrao dele é resolver o primeiro case e todos os outros abaixo.
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperaçao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
        }             
    }

    resultado(10)
    resultado(7)
    resultado(5)
    resultado(2.33)
    resultado(-1)
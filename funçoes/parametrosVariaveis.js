function soma() {
    let soma = 0 
    for(i in arguments) { 
        // arguments é um array que fica disponivel em toda funçao.
        //quando nao tem parametros preestabelecidos esse array fica vazio.
        soma += arguments[i] // soma cada indice 
    } return soma
}

console.log('Valor da soma é: ' + soma(4,6,7,8,9,0))
console.log('Valor da soma é: ' + soma(1.2,2.3,4.4))
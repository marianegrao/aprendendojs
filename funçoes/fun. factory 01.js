// funçao factory: retorna/fabrica um novo obj no final
// factory VS funcao construtora: factory nao usa o new nem o this, é mais estática já que o this nao varia.

function criarProduto (nome, preço) {
    return {
        nome,
        preço
    }
}

console.log(criarProduto())
console.log(criarProduto('camera Canon', 5.321))


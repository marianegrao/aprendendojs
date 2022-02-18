const precos = [3.5, 6.4, 8.9, 10.5, 12.6, 15.2]

// imprimindo preços menores que 10 reais sem callback
let precosBaixos = []
for (let i in precos) {
    if (precos[i] < 10) {
        precosBaixos.push(precos[i]) // toda vez que ele encontrar  um valor menor que 10, vai adiciona-lo ao array vazio 'precosBaixos'
    }
}

console.log(precosBaixos)

// imprimindo preços menores que 10 reais com callback
const precosBaixos2 = precos.filter (preco => preco < 10) // ele vai percorrer o array 'precos' e vai comparar cada elemento. 'é menor que 10?' se sim, ele entra para o array '
console.log(precosBaixos2) 

// tambem posso atribuir a funçao a uma constante para poder reutilizar-lo
const produtosMenosDe10 = preco => preco < 10
const precosBaixos3 = precos.filter(produtosMenosDe10)
console.log(precosBaixos3) 
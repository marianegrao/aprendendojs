// junto com o destructuring pode ser utilizado outro recurso chamado parametro padrao
function rand ({min = 0, max = 100}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda pra baixo. ceil= p cima
}
const obj = {max: 50, min: 40} // alterou o parametro padrao
console.log(rand (obj))
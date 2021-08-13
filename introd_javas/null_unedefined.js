const at = {name: 'Maria Clara'} // contante at é o endereço de onde esta o obj.
const bt = at // bt vai mostrar o msm endereço q at aponta

console.log(at) 
bt.name = 'Negrão'
console.log(at)

valor = null 
/* null = ausência intencional de um valor de objeto.
   pode ser usado pra zerar o valor de uma variavel
 */
// let valor // undefined = nao teve valor atribuido apesar de ser inicializada.
const produto = {}
console.log(produto.preco) // a variavel preço nao está definido
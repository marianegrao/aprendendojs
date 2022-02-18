const a = {name: 'Maria Clara'} // constante a é o endereço de onde esta o obj.
const b = a // b vai mostrar o msm endereço q a aponta

console.log(a) 
b.name = 'Negrão' // consigo alterar o obj 'a' atravez do 'b', pois os dois apontam para o mesmo endereço.
//agora o nome armazena 'Negrao' em vez de 'Maria Clara'
console.log(a)


valor = null 
/* null = ausência intencional de um valor de objeto.
   pode ser usado pra zerar o valor de uma variavel
  
   undefined = nao teve valor atribuido apesar de ser inicializada.
 */
// let valor 
const produto = {}
console.log(produto.preco) // foi inicializada, mas nao teve valor atribuido

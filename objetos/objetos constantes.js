// 'Por que é possivel alterar valores de um objeto mesmo ele stando atribuido a umas constate (que nao pode ser modificada)?'
// Pois o que não é modificavel é, somente, o local/endereço que a constante pessoa está registrado. E não o atributo 'nome', esse sim é alteravel.
const pessoa = {nome: 'Maria'}
pessoa.nome = 'Ana'
console.log(pessoa)

Object.freeze(pessoa) // congelou o obj 'pessoa'
pessoa.nome = 'Paula' // nao pode mais ser alterar, adicionar e deletar 
console.log(pessoa.nome)

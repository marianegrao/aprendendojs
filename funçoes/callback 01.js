const alunos = ['Maria', 'João', 'Ze']

function imprimir (nome, indice) { // ele entende o segundo parametro como o indice (o numero), indenpente do nome que eu coloque na variavel.
    console.log(`${indice + 1}. ${nome}`) // o indice é somado mais 1 para que Maria seja o elemento de indice 1 e não 0
}
alunos.forEach(imprimir) // ' forEach' sempre vai ser acionado quando encontrar um novo elemento do array, no caso um novo aluno.
// vai "chamar de volta" a funçao 'imprimir' toda vez q encontrar um elemento novo.

alunos.forEach(aluno => console.log(aluno)) // entende 'aluno' como o primeiro parametro inserido na funçao imprimir, ou seja, 'aluno' corresponde a 'nome'

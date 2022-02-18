// acessando uma funçao dentro de um objeto atraves do 'this'
const tela = {
    saudacao: 'Olá mundo!',
    tempo: 'Agosto de 2021',
    imprimirTempo: function() {
        console.log(this.tempo) // acessando 'tempo' dentro da funçao 'imprimirTempo' que pertence ao obj 'tela'
    },
    imprimirSaudacao() {
        console.log(this.saudacao) // acessando 'saudacao' dentro da funçao que pertence ao obj 'tela'
    }
}

tela.imprimirSaudacao()
tela.imprimirTempo()

const imprimindoSaudacao = tela.imprimirSaudacao // armazenei uma funçao dentro de uma variavel
imprimindoSaudacao() // conflito entre o mundo funcional e o OO (orientado obj)
// a funçao está dentro de um outro contexto que nao é o mesmo da funçao que esta dentro o obj 'tela', por isso ele desconhece a saudaçao

const imprimirNaTela = tela.imprimirSaudacao.bind(tela) // o 'this' sempre vai ser resolvido pra o obj 'tela'
imprimirNaTela()
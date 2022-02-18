function tratarErrorELançar(erro) {
    //throw 'Um erro foi identificado.' 
    throw { // lança o erro e pode exibir um numero, uma frase ou especificidade do erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } 
}

function imprimirNomeGritando(obj) {
    try { // quando se suspeita que um codigo poderá dar erro
     console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // para tratar o erro q o 'try' identificou
        tratarErrorELançar(e)
    } finally { // mostra mesmo se houver erro ou nao
        console.log ('final')
    }
}

const obj = {name:'pedido em falta. é preciso reabastecer o estoque'}
imprimirNomeGritando(obj)
// Closures: tem a memoria do local/entorno/escopo de onde a funçao foi declarada


const x = 'Hey'

function externo (){
    const x = 'Holla'
    function interno (){
        return x // o contexto lexico que a funçao 'dentro' foi declarada encontrava um 'x' no seu entorno, no escopo em sua volta.
    }
    return interno
}

const y = externo ()
console.log(y())
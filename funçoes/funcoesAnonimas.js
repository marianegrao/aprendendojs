const soma = function (x,y) {
    return x + y
}

console.log(soma(2,3))

// chamou uma funçao dentro de outra funçao
const ImprimirResultado = function (a, b, operacao = soma) { 
    console.log(operacao(a,b))
}

ImprimirResultado(3,4) // toma como padrao a funçao armazenada na variavel 'soma'
ImprimirResultado(3,3, function(x,y){
    return x-y
}) // utilizou a funçao que eu escrevi como parametro na operaçao
ImprimirResultado(2,2, (x,y) => x*y) // utilzando uma funçao arrow com parametro na operaçao
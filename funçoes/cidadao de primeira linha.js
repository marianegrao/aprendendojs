// cidadao de primeira linha: trata a funçao como um dado
// Higher- order function = Funçao de Alta Ordem
// criar uma funçao de forma literal (padrao)
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function(a,b){return a +b}, fun1, fun2]

console.log('A soma é: ' + array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Tudo bom?'}
console.log(obj.falar()) // os parenteces internos servem para invocar a funçao

//Passar funçao como parametro
function run (fun) {
    fun() // parenteses é necessario 
}

run(function() {console.log('Teste')})

//
function soma (a,b) {
    return function (c) {
        console.log (a + b + c)
    }
}

soma (3,3) (3) // ou
const AeB = soma (3,3)
AeB(3)

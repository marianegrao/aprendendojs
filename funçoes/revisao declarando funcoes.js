console.log(soma(2,2)) 
// pode ser chamada antes da funçao ser declarada, pois o interpretador do js ja carrega todas as function declaration previamente.

//function declaration
function soma (x,y) {
    return x + y
}

//function expression
const sub = function  (x,y) {
    return x - y
}

// named function expression
const mult = function mult (x,y) {
    return x * y
} // pouco utilizada. pode ser utiliazada para avaliar erros


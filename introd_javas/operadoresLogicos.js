// tabela verdade (e: so vai ser true se todos os operandos forem verdadeiros, 
//                ou:)

// situaçao hipotetica
// se trabalhar na terça e na quinta, comprarei televisao de 50 e sorvete
// se trabalhar na terça ou na quinta, comprarei televisao de 32 e sorteve
// se nao trabalhar, nem televisao nem sorvete

function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2 // ou
    const comprarTv50 = trab1 && trab2 // e
    // const comprarTV32 = !!(trab1 ^ trab2)
    const comprarTv32 = trab1 != trab2 // ou exclusivo
    const maisSaudavel = !comprarSorvete // negaçao logica
    return {comprarSorvete, comprarTv50, comprarTv32, maisSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false)) // nao deu certo

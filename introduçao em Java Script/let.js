var numero = 2 // // escopo: global e de funçao.
{
    let numero = 3 // escopo: global, de funçao e de bloco
    console.log(numero) // mostra so oq ta dentro desse escopo
}
console.log(numero)
{{{{ var sera = 'Será??'
    console.log(sera) 
}}}}
console.log(sera) // visivel/utilizave globalmente (em todo sistema)

function teste() {
    var local = 123
    console.log(local) // visivel/utilizavel apenas dentro da funçao
}

teste()

var numero = 2
{
    var numero = 3
    console.log(numero) 
}
console.log(numero) // considera tudo fazendo parte de um mesmo escopo
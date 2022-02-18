function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        // o uso dessa pratica é desaconselhada. melhor retornar um 'erro'
        console.log (`O valor ${area}m2 ultrapassa o limite aceitado.`)
    } else {
        return area
    }
}

console.log(area(2,3)) 
console.log(area(5,5))
console.log(area(5,1,6,7)) // so aceita os dois primeiros parametros
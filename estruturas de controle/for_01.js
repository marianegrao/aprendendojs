let contador = 1
while (contador <= 10) {
    console.log('Contador: ' + contador)
    contador++
}

// tranformando while em for:
for (n =1; n <= 10; n++) {
    console.log('Número: '+ n)
}

// usando for com array
const precos = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let p = 0; p < precos.length; p++ ) {
    console.log('Preço: '+ precos[p]) 
}

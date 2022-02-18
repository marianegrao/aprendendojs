// revisao sobre as funçoes do tipo arrow: reduzindo sintaxes
// obs: funçao arrow é sempre anômina. para chama-la depois é necessario armazenar ela em alguma variavel
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { 
    return 2 *a
}

dobro = (a) => 2 * a // return implicito
// utiliza quando tem apenas um parametro (a, )
console.log(dobro(3))

let falar = function() {
    return 'Olá'
}

falar = () => 'Olá'
falar = _ => 'Olá' // tem parametro
console.log(falar())
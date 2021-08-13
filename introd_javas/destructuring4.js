function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = ([,20])
console.log(rand(obj))
console.log(rand([500,600]))
console.log(rand ([40,30]))
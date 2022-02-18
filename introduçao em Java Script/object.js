// objetos funcionam na base de identificador + valor
// coleçao de chaves e valores
// obj geral gera um json
// json: formato textual q serve prar a comunicaçao entre sistemas

 prod1 = {} // cochete cria objeto e () criar array
prod1.nome = 'Caderno Inteligente'
prod1.preco = 200 + 'reais'
prod1.desconto = 0.40
prod1.precoFinal = (200 * 0.40)
prod1['ClienteOuro'] = 100 + ' reais'
console.log(prod1)

const prod2 = {
    nome: 'Fichario',
    preco: 60.00,
}
console.log(prod2)

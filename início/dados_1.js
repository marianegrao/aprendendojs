var produto = "Canetas"
var quantidade = 10;
const preço = 6.4;
var imposto = 1.5;
var desconto = 0.4;
var preçoFinal = preço + imposto
var preçoComDesconto = preço * (1-desconto)
var recepçao =  "Seja bem vindo(a) a papelaria Airam's! :D Confira um dos nossos produtos:"
var despedida = "Agradecemos sua visita. Volte sempre!"

console.log (recepçao)
console.log ("Produto(s): " + produto 
             + " ; " + "Categoria: Escrita.");
console.log ("Quantidade: " + quantidade + " unidades.");
console.log ("Preço: " + preço + " reais.");
console.log ("Imposto: " + imposto + " reais")
console.log ("Preço adicionado de imposto: " + preçoFinal + " reais.")
console.log ("Preço com desconto: " + preçoComDesconto + " reais.")

console.log (despedida)

// preço = 10 -> dá erro pois const nao permite alteraçoes 
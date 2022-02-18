const fila = {
    _senha: 0,
    get senha(){return this._senha}, // pega o valor
    set senha(valor){ // trata ele
        if (valor > 100) 
            console.log ('Valor maior que 100')
        else 
            this._senha = valor
        },
    novaSenha() {
        senhaAtual= this.senha // nova variavel recebe o valor de get senha
        senhaAtual++ // adiciona um com base na senha anterior
        this.senha= senhaAtual //é tratado no set e guarda o valor atual da senha
        return senhaAtual
    }
}

obSenha = Object.create(fila)
obSenha.senha = 101
console.log(obSenha.novaSenha())
console.log(obSenha.novaSenha())
console.log(obSenha.novaSenha())
//obSenha.senha = 120
//console.log(obSenha.novaSenha())

// solucionando problema gerado pelo setInterval: com bind ou com variavel.
function Relogio() {
    this.seg = 0
    const self = this // forma de 'triblar' o sistema.

// dispara uma funçao apartir de um intervalo de tempo preestabelecido
    setInterval (function contando() {
        self.seg++ // quem tá disparando o this é o temporizador dentro do setInterval e não a funçao Relogio, por isso o this nao é reconhecido (0 + undefined = NaN)
        console.log(self.seg)
    }/*.bind(this)*/, 1000) // {}: nao envoquei a funçao // a cada 1000 milisegundos (1 segundo) a funçao 'contando' é disparada
}

new Relogio

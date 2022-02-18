function Relogio() {
    this.seg = 0

    setInterval (() => {
        this.seg++ // aponta para o this registrado dentro de onde setInterval foi escrito (ou seja, dentro da funçao Relogio)
        console.log(this.seg)
    }, 1000)
}

new Relogio

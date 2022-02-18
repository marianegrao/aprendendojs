/* funçoes construtoras: serve como base/molde/parametro para criaçao de objetos
 Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. 
 O this dentro delas se referencia ao objeto criado a partir delas.
*/

function Aves(nomeCientif, ordem, familia) {
    this.nomeCientif = nomeCientif
    this.ordem = ordem
    this.familia = familia
}

const SabiaLaranjeira = new Aves ('Turdus rufiventris', 'Passeriformes', 'Turdidae')
console.log (SabiaLaranjeira)

const Currupiao = new Aves ('Icterus jamacaii', 'Passeriformes', 'Icteridae')
console.log (Currupiao)

// IIFF -> Imediately Invoked Function Expression
// funçao auto invocada: importante para nao participar do escopo global no browser

(function(){
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente')
}) () 
const texto = document.querySelector(".Texto");
//funciones para bloquear caracteres del teclado.
texto.addEventListener("keypress", function(e){

    if (!Ver(e)){
        e.preventDefault();
    }

})

function Ver(e) {
    
    const llave = String.fromCharCode(e.keyCode);

    //console.log(keyCode);
    //console.log(llave);

    const palabras = '[a-z- ]';
    //const palabras = '[a-zA-Z0-9]';

    if(llave.match(palabras)){
        console.log(llave);
        return true;
    }


}

function encriptacion() {
    var texto = document.querySelector(".Texto").value;
    
    var cambios = {
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };

    TextoEncriptado = texto.replace(/a|e|i|o|u/g, function(matched){
        return cambios[matched];
    });
  
    document.querySelector(".encriptado").innerHTML=TextoEncriptado.toLowerCase();
}

function desencriptacion(){
    var texto = document.querySelector(".Texto").value
    
    var cambios = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };

    TextoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return cambios[matched];
    });
    
    document.querySelector(".encriptado").innerHTML=TextoDesencriptado.toLowerCase();
    
}

function copiar(){
    let texto = document.querySelector(".encriptado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("Texto Copiado");
}

/* codigos para ampliacion de funciones !BETA!
function bloqueos(){
    var texto = document.querySelector(".Texto").value
    if(texto != String){
        alert(Error);
    }
    if(texto = "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0"){
        alert(Error);
        
    }
}

bloqueos();*/


// .toLowerCase();  para letras minusculas

/* Guardado de Alternativa
function encriptacion() {
    var texto = document.querySelector(".Texto").value;
    if( texto.includes("a", "e", "i", "o","u")){
        
        texto.replace(/[a]/g, "ai")
        texto.replace(/[e]/g, "enter")
        texto.replace(/[i]/g, "imes")
        texto.replace(/[o]/g, "ober")
        texto.replace(/[u]/g, "ufat");

        document.querySelector(".encriptado").innerHTML=u;
       
    }else{
        alert(Error);
    }

}
*/
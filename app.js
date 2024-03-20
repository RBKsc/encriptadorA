let textArea = document.querySelector(".text1");
let mensaje=document.querySelector (".text2");


  let vocales = [
        ["i", "imes"],
        ["a", "ai"], 
        ["u", "ufat"],
        ["e", "enter"],
        ["o", "ober"],
    ];

    
    
function encriptador (stringEncriptado){
   
    stringEncriptado=stringEncriptado.toLowerCase();
  
    for (let i =0; i<vocales.length; i++){
        if (stringEncriptado.includes(vocales [i][0])){
         stringEncriptado=stringEncriptado.replaceAll(vocales[i][0], vocales [i][1])
        }
   
    }
    return stringEncriptado
}



function desencriptar (stringDesencriptar){
  
   stringDesencriptar = stringDesencriptar.toLowerCase();
        for (let i = 0; i<vocales.length; i++){
            if (stringDesencriptar.includes(vocales [i][1])){
                stringDesencriptar=stringDesencriptar.replaceAll(vocales[i][1], vocales [i][0]);
            }
        }
        return stringDesencriptar
    }


    function botonEncriptar(){
    const textoEncriptar=encriptador(textArea.value);
    mensaje.value = textoEncriptar;
    textArea.value="";
    mensaje.style.backgroundImage="none";
    }


    function botonDesencriptar(){
    const textoEncriptar=desencriptar(textArea.value);
    mensaje.value = textoEncriptar;
    textArea.value="";
    }

    function copiar (){
        mensaje.select();
        document.execCommand("copy")
    }


  
  
    
    
  



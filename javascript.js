let entradaInput = document.getElementById('entrada-input');
let salidaInput = document.getElementById('salida-input');

let ArrayEncriptador = [
    ["a","ai"],
    ["e","enter"],
    ["i","iman"],
    ["o","oso"],
    ["u","ula"]

];

// console.log(ArrayEncriptador[1][0])

function btnEncriptar(){
    let mensaje = entradaInput.value; // variable en donde se almacenara el valor del mensaje
    let mensajeEncriptado = ''; // variable en donde se guardara el mensaje encriptado

    //Recorremos cada letra del mensaje con un bucle
    for(let i= 0; i < mensaje.length; i++){
        
        let letra = mensaje[i] // variable donde se guardara el resultado de cada letra del texto
        let encriptado = letra; //Almacenamos la variable letra en una nueva variable
        // console.log(encriptado);
        for(let a = 0; a< ArrayEncriptador.length; a++){
            if(ArrayEncriptador[a][0] === letra){
                encriptado = ArrayEncriptador[a][1];
                break;
            }
        }
        //Ahora agregaremos la letra encriptada  al mensajeEncriptado
        mensajeEncriptado += encriptado;            
    }
        //Mostrando el mensajeEncriptado en la salida input
        
        salidaInput.value = mensajeEncriptado;

}

function btnDesencriptar(){
    let textoEncriptado = entradaInput.value;
    let textoDesencriptado = '';
      
    for(let i = 0; i < textoEncriptado.length; i++) {
        let letraEncriptada = textoEncriptado[i];
        let encontrada = false; //Esta es una variable haber si se encontro la letrs
        
        for(let j = 0; j < ArrayEncriptador.length; j++) {
            // console.log("Letra en Array encriptador", letraEncriptada);
            if(ArrayEncriptador[j][1] === letraEncriptada) {
                textoDesencriptado += ArrayEncriptador[j][0];
                encontrada = true; //marcamos si se encontro la letra encriotada
                break;
            }        
        }
           if(!encontrada) {
            textoDesencriptado += letraEncriptada;
           } 
    }
    console.log(textoDesencriptado);
    salidaInput.value = textoDesencriptado;
    
}

function btncopiar(){
    let copiar = salidaInput;
    copiar.select();
    document.execCommand('copy');
    
    Swal.fire({
        title: "Texto Copiado!",
        icon: "success"
    });
}
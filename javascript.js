const entradaInput = document.getElementById("entrada-input");
const salidaInput = document.getElementById("salida-input");

const ArrayEncriptador = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "iman"],
  ["o", "oso"],
  ["u", "ula"],
];

// Función para encriptar el texto
function btnEncriptar() {
  let mensaje = entradaInput.value.toLowerCase(); // Convertimos el texto a minúsculas
  let mensajeEncriptado = mensaje;

  // Reemplazamos las letras según el ArrayEncriptador
  ArrayEncriptador.forEach(([original, encriptado]) => {
    const regex = new RegExp(original, "g"); // Buscamos todas las ocurrencias de la letra
    mensajeEncriptado = mensajeEncriptado.replace(regex, encriptado);
  });

  salidaInput.value = mensajeEncriptado;
}

// Función para desencriptar el texto
function btnDesencriptar() {
  let mensajeEncriptado = entradaInput.value.toLowerCase(); // Convertimos el texto a minúsculas
  let mensajeDesencriptado = mensajeEncriptado;

  // Reemplazamos las palabras encriptadas según el ArrayEncriptador
  // Procesamos las palabras en orden inverso para desencriptar correctamente
  ArrayEncriptador.slice()
    .reverse()
    .forEach(([original, encriptado]) => {
      const regex = new RegExp(encriptado, "g"); // Buscamos todas las ocurrencias de la palabra encriptada
      mensajeDesencriptado = mensajeDesencriptado.replace(regex, original);
    });

  salidaInput.value = mensajeDesencriptado;
}

// Función para copiar el texto de salida al portapapeles
function btncopiar() {
  salidaInput.select();
  document.execCommand("copy");

  Swal.fire({
    title: "Texto Copiado!",
    icon: "success",
  });
}

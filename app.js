function copiar() {
  let textoPanel = document.getElementById("texto-transformado").textContent;
  navigator.clipboard.writeText(textoPanel);
  alert("Copied the text: " + textoPanel);
}

function agregarBoton() {
  let comprobacionBoton = document.getElementById("boton-copiar");

  if (!comprobacionBoton) {
    const botonCopiar = document.createElement("button");
    botonCopiar.innerHTML = "Copiar";
    botonCopiar.id = "boton-copiar";
    botonCopiar.onclick = function () {
      copiar();
    };
    document.getElementById("panel-encriptado").appendChild(botonCopiar);
  }
}

function encriptador() {
  let textoPorEncriptar = document.getElementById("text-box").value;

  //remplazar caracteres

  //Reemplazo por números
  let remplazarA = textoPorEncriptar.replaceAll("a", "1");
  let remplazarE = remplazarA.replaceAll("e", "2");
  let remplazarI = remplazarE.replaceAll("i", "3");
  let remplazarO = remplazarI.replaceAll("o", "4");
  let remplazarU = remplazarO.replaceAll("u", "5");

  //reemplazo por clave
  let remplazar1 = remplazarU.replaceAll("1", "ai");
  let remplazar2 = remplazar1.replaceAll("2", "enter");
  let remplazar3 = remplazar2.replaceAll("3", "imes");
  let remplazar4 = remplazar3.replaceAll("4", "ober");
  let remplazar5 = remplazar4.replaceAll("5", "ufat");

  //llamar panel-encriptado y remplazar el contenido por el texto.

  document.getElementById("texto-transformado").innerText = remplazar5;

  //llamar funcion botón
  agregarBoton();
}

function desencriptado() {
  let textoPorDesencriptar = document.getElementById("text-box").value;

  let desencriptado = textoPorDesencriptar
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  let contenedorTexto = document.getElementById("texto-transformado");
  contenedorTexto.innerText = desencriptado;

  //llamar funcion botón

  agregarBoton();
}

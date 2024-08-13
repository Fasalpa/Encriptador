function encriptador() {
  let textoPorEncriptar = document.getElementById("text-box").value;

  //remplazar caracteres

  //Reemplazo por números
  let remplazarA = textoPorEncriptar.replace("a", "1");
  let remplazarE = remplazarA.replace("e", "2");
  let remplazarI = remplazarE.replace("i", "3");
  let remplazarO = remplazarI.replace("o", "4");
  let remplazarU = remplazarO.replace("u", "5");

  //reemplazo por clave
  let remplazar1 = remplazarU.replace("1", "ai");
  let remplazar2 = remplazar1.replace("2", "enter");
  let remplazar3 = remplazar2.replace("3", "imes");
  let remplazar4 = remplazar3.replace("4", "ober");
  let remplazar5 = remplazar4.replace("5", "ufat");

  //llamar panel-encriptado y remplazar el contenido por el texto.

  document.getElementById("panel-encriptado").innerText = remplazar5;
}

function desencriptado() {
  let textoPorDesencriptar = document.getElementById("text-box").value;
  let remplazarAi = textoPorDesencriptar.replace("ai", "1");
  let remplazarEnter = remplazarAi.replace("enter", "2");
  let remplazarImes = remplazarEnter.replace("imes", "3");
  let remplazarOber = remplazarImes.replace("ober", "4");
  let remplazarUfat = remplazarOber.replace("ufat", "5");

  //reemplazo por clave
  let remplazar1 = remplazarUfat.replace("1", "a");
  let remplazar2 = remplazar1.replace("2", "e");
  let remplazar3 = remplazar2.replace("3", "i");
  let remplazar4 = remplazar3.replace("4", "o");
  let remplazar5 = remplazar4.replace("5", "u");

  document.getElementById("panel-encriptado").innerText = remplazar5;
}

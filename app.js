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

  document.getElementById("panel-encriptado").innerText = remplazar5;
}

function desencriptado() {
  let textoPorDesencriptar = document.getElementById("text-box").value;
  let remplazarAi = textoPorDesencriptar.replaceAll("ai", "1");
  let remplazarEnter = remplazarAi.replaceAll("enter", "2");
  let remplazarImes = remplazarEnter.replaceAll("imes", "3");
  let remplazarOber = remplazarImes.replaceAll("ober", "4");
  let remplazarUfat = remplazarOber.replaceAll("ufat", "5");

  //reemplazo por clave
  let remplazar1 = remplazarUfat.replaceAll("1", "a");
  let remplazar2 = remplazar1.replaceAll("2", "e");
  let remplazar3 = remplazar2.replaceAll("3", "i");
  let remplazar4 = remplazar3.replaceAll("4", "o");
  let remplazar5 = remplazar4.replaceAll("5", "u");

  document.getElementById("panel-encriptado").innerText = remplazar5;
}

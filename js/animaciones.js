/*function cambiar() {
  var textoIngresado = document.getElementById("tituloNoticia").value;
  document.getElementById("textoOriginal").innerHTML = "Texto original: " + textoIngresado;
  var textoCambiado = textoIngresado.replace("A", "Rombo");
  var textoCambiado = textoIngresado.replace("E", "Pica");
  var textoCambiado = textoIngresado.replace("I", "Corazón");
  var textoCambiado = textoIngresado.replace("O", "Carita Feliz");
  var textoCambiado = textoIngresado.replace("U", "Carita Triste");
  document.getElementById("TextoCambiado").innerHTML = "Texto modificado: " + textoCambiado;
}*/


function pulsar(e) {
  switch (e.keyCode) {
    case 38:
      aumentar();
      break;
  }
}

function aumentar(){
   var anioActual = parseInt(document.getElementById("anio").innerText);
   var anioNuevo = anioActual + 1;
   document.getElementById("anio").innerHTML = anioNuevo;
   if(anioNuevo >= 2019)
   {
      document.getElementById("mensaje").innerHTML = "Esta noticia es del futuro.";
   }
}


function cambiar()
{
   var textoIngresado = document.getElementById("tituloNoticia").value;
   document.getElementById("textoOriginal").innerHTML = "Texto original: " + textoIngresado;
   var textoCambiado = "";
   var letras = textoIngresado.split("");
   for (var i = 0; i < letras.length; i++) {
     if (letras[i]=='A' || letras[i]=='a') {
        var cambio = String.fromCharCode(9830);
        letras[i] = cambio;
     }
     if (letras[i]=='E' || letras[i]=='e') {
        var cambio = String.fromCharCode(9824);
        letras[i] = cambio;
     }
     if (letras[i]=='I' || letras[i]=='i') {
        var cambio = String.fromCharCode(9829);
        letras[i] = cambio;
     }
     if (letras[i]=='O' || letras[i]=='o') {
        var cambio = String.fromCharCode(9786);
        letras[i] = cambio;
     }
     if (letras[i]=='U' || letras[i]=='u') {
        var cambio = String.fromCharCode(9785);
        letras[i] = cambio;
     }
     textoCambiado = textoCambiado+letras[i];
   }
   document.getElementById("textoCambiado").innerHTML = "Texto modificado: " + textoCambiado;
}

/*
Autor: Gaspar Novel Porcel
Centro: Cifp Francesc de Borja Moll
*/

//Variables globales 
var mayuscula = 1;
var emoji = 1
var ControlDeFecha = 0;

//Función enviar que enviará los mensajes escrtios en textArea a messagingArea
function enviar() {

    //Variables de fecha para messagingArea
    var fecha = new Date();
    var horaMinMensaje = fecha.getMinutes();
    var horaMinMensajeEscrito = horaMinMensaje.toLocaleString();

    //Arrays para formatear el nombre del dia y los meses
    var days = ['Lun','Mar','Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

    //Variable de fecha que se muestra primero en messaginArea
    var diaNumMes = new Date();
    diaNumMes = "<h3 class=" + "diaNumMes" + ">" + (days[diaNumMes.getUTCDay()-1] + ", " + diaNumMes.getDate() + " " + meses[diaNumMes.getMonth()]) + "</h3>";

    //Control para que el dia solo se printe una vez
    if (ControlDeFecha == 0) {
        document.getElementById("messagingArea").innerHTML += diaNumMes
        ControlDeFecha++
    }

    //Bucle para fomatear la hora y los minutos 1 al 10 con un 0 delante y sino lo printa
    if (horaMinMensajeEscrito < 10) {
        horaEscrita = fecha.getHours() + ":" + "0" + fecha.getMinutes()
    } else {
        horaEscrita = fecha.getHours() + ":" + fecha.getMinutes()
    }

    //Bucle que concatena el mensaje, la horaEscrita y las mayuscula
    if (document.getElementById("mensaje").value.trim() != "") {
        document.getElementById("messagingArea").innerHTML += "<p>" + document.getElementById("mensaje").value + " " + "<font style='font-size:10px; padding-left: 8px;'>" + horaEscrita + "</font>" + "</p>";
        document.getElementById("mensaje").value = "";
        mayuscula = 1
        document.getElementById("mayuscula").value = "⇪"
    } else{
        document.getElementById("messagingArea").innerHTML += "<p>" + document.getElementById("mensaje").value + " " + "<font style='font-size:10px; padding-left: 8px;'>" + horaEscrita + "</font>" + "</p>";
    }
}

//Funcion que recibe una letra enviada
function enviarLetra(letra) {
    //Bucle que comprueba si la letra esta en mayúscula
    if (mayuscula == 0) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra;
        if (letra == ".") {
            mayuscula = 1
        }
    //El bucle empieza aqui ya que mayuscula siempre esta en 1 al principio
    } else if (mayuscula == 1) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
        mayuscula = 0;
        document.getElementById("mayuscula").value = "⇧"
    // Si tiene dos clicks la tecla se convierte todas las letras escritas despues en mayuscula
    } else if (mayuscula == 2) {
        document.getElementById("mensaje").value = document.getElementById("mensaje").value + letra.toUpperCase();
    }
}

//Funcion para añadir un salto de línea
function saltoLinea() {
    var salto = "<br>" 
    document.getElementById("mensaje").value = document.getElementById("mensaje").value + salto;
}

//Funcion que elimina un caracter dependiendo de la tecla pulsada
function deleteCaracterAtras(letra) {
    var letraBorrada = document.getElementById("mensaje").value.trim();
    document.getElementById("mensaje").value = letraBorrada.slice(0, -1);

}

//Funcion que elimina un caracter dependiendo de la tecla pulsada
function deleteCaracterDelante(letra) {
    var letraBorrada = document.getElementById("mensaje").value.trim();
        document.getElementById("mensaje").value = letraBorrada.slice(1)
}

//Funcion que da un vacio al mensaje para que la proxima letra será mayuscula
function limpiarMensaje() {
    document.getElementById("mensaje").value = "";
    mayuscula = 1;
}

//Funcion que elimina la ultima palabra gracias a los espacios
function eliminarUltimaPalabra() {
    var texto = document.getElementById("mensaje").value.trim();
    var ultimoEspacio = texto.lastIndexOf(" ");
    document.getElementById("mensaje").value = texto.substring(0, ultimoEspacio);
}

//Funcion que hace mayusculas las letras y el teclado 
function hacerMayuscula() {
    if (mayuscula == 0) {
        mayuscula = 1
        document.getElementById("mayuscula").value = "⇪"
    } else if (mayuscula == 1) {
        mayuscula = 2
        document.getElementById("mayuscula").classList.add('teclaMayus');
    } else if (mayuscula == 2) {
        mayuscula = 0
        document.getElementById("mayuscula").classList.remove('teclaMayus');
        document.getElementById("mayuscula").value = "⇧"
    }
}

//Funcion que cambia el teclado para hacer aparecer y desaparecer la emojiArea
function verEmoji() {
    if (emoji == 1) {
        document.getElementById("keyboardArea").classList.remove('keyboardAreaVis');
        document.getElementById("keyboardArea").classList.add('keyboardAreaInv');
        document.getElementById("emojiArea").classList.remove('emojiAreaInv');
        document.getElementById("emojiArea").classList.add('emojiAreaVis');
        emoji = 0;
    } else if (emoji == 0) {
        document.getElementById("emojiArea").classList.remove('emojiAreaVis');
        document.getElementById("emojiArea").classList.add('emojiAreaInv');
        document.getElementById("keyboardArea").classList.remove('keyboardAreaInv');
        document.getElementById("keyboardArea").classList.add('keyboardAreaVis');
        emoji = 1;
    }
}

let intervaloJuego = window.setInterval(function() {
    let maloOBueno = Math.random() * 100;
    let index = parseInt(Math.random() * objetivos.length);
    if (maloOBueno > 35) {
        objetivos[index].style.backgroundImage = "url('https://i.pinimg.com/originals/3b/0c/5a/3b0c5aebec04f54e449150f34a93ada5.jpg')";
        objetivos[index].setAttribute("data-malo", "1");
        window.setTimeout(function() {
            objetivos[index].style.backgroundImage = "";
        objetivos[index].setAttribute("data-malo", "0");
        }, Math.random() * 600 + 250);
    } else {
        objetivos[index].style.backgroundImage = "url('https://i.pinimg.com/originals/e9/3f/d6/e93fd6eb20511add0373d0b0f88800de.png')";
        objetivos[index].setAttribute("data-bueno", "1");
        window.setTimeout(function() {
            objetivos[index].style.backgroundImage = "";
        objetivos[index].setAttribute("data-bueno", "0");
        }, Math.random() * 600 + 250);
    }
}, Math.random() * 800 + 400);

let puntos = 0;
let puntuacion = document.getElementById("puntuacion");

document.getElementById("jugar-otra-vez").addEventListener("click", function() {
    window.location.reload();
});

function editarPuntos(puntosDelta) {
    puntos += puntosDelta;
    puntuacion.textContent = puntos;

    if (puntos <= -10) {
        window.clearInterval(intervaloJuego);
        document.getElementById("juego-terminado").style.display = "block";
        document.getElementById("texto-final").textContent ="Perdiste";

    } else if (puntos >= 10) {
        window.clearInterval(intervaloJuego);
        document.getElementById("juego-terminado").style.display = "block";
        document.getElementById("texto-final").textContent ="Ganaste";
    }
}

let selector = document.getElementById("selector");
let objetivos = document.getElementsByClassName("objetivo");

selector.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData('application/node type', this);
});

document.addEventListener("dragenter", function(e) {
    e.preventDefault();
    if (event.target.className == "capa") {
        event.target.style.backgroundColor = "rgba(255, 10, 50, 0.5)";
    }
});

document.addEventListener("dragover", function(e) {
    e.preventDefault();
});

document.addEventListener("dragleave", function(e) {
    if (event.target.className == "capa") {
        event.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});

document.addEventListener("drop", function(e) {
    if (event.target.className == "capa") {
        event.target.style.backgroundColor = "rgba(0,0,0,0)";
        let padre = event.target.parentNode;
        if (padre.getAttribute("data-malo") == "1") {
            editarPuntos(+1);
        } else if (padre.getAttribute("data-bueno") == "1"){
            editarPuntos(-5);
        } else {
            editarPuntos(-1);
        }
    }
});


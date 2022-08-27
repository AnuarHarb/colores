const cuadrados = document.getElementsByClassName("cuadrado");
const logo = document.getElementById("logo");
const fondo = document.querySelector("body");
const pillIzquierdo = document.getElementById("pill-izquierdo");
const pillDerecho = document.getElementById("pill-derecho");

function cambiarLogoOscuro() {
  logo.src = "img/logo-blanco.png";
  fondo.style.backgroundColor = "black";
  pillDerecho.classList.remove("active");
  pillIzquierdo.classList.add("active");
}

function cambiarLogoClaro() {
  logo.src = "img/logo-negro.png";
  fondo.style.backgroundColor = "white";
  pillDerecho.classList.add("active");
  pillIzquierdo.classList.remove("active");
}

function camabiarColores(color) {
  cuadrados[0].style.backgroundColor = color;
  cuadrados[1].style.backgroundColor = color;
  cuadrados[2].style.backgroundColor = color;
  cuadrados[3].style.backgroundColor = color;

  cuadrados[0].innerHTML = "<h1>" + color + "<h1>";
  cuadrados[1].innerHTML = color;
  cuadrados[2].innerHTML = color;
  cuadrados[3].innerHTML = color;
}

//

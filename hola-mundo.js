var piedra = "0"
var papel = "1"
var tijera = "2"

var juego = prompt("Ingresar: 0) piedra, 1) papel, 2) tijera","")

var resultadoPiedra = (piedra == juego)
var resultadoPapel = (papel == juego)
var resultadoTijera = (tijera == juego)

if( (resultadoPiedra == true)){
    alert("Selecciono Piedra")
}

if( (resultadoPapel == true)){
    alert("Selecciono Papel")
}

if( (resultadoTijera == true)){
    alert("Selecciono Tijera")
}

var aleatorio = Math.floor(Math.random() * 3)


if (aleatorio == 0){
    aleatorio = "0"
        alert("La pc eligio Piedra")
    } else if (aleatorio == 1){
    alert("La pc eligio papel")
    aleatorio = "1"
}else if (aleatorio == 2){
    aleatorio = "2"
    alert("La pc eligio tijera") 
} 

if (
    (juego == "0" && aleatorio == "2") || 
    (juego == "2" && aleatorio == "1") ||
    (juego == "1" && aleatorio == "0")
) {
    ganaUsuario();
} else if (
    (aleatorio == "0" && juego == "2") || 
    (aleatorio == "2" && juego == "1") ||
    (aleatorio == "1" && juego == "0")
){
    ganaPC();
}else if (
    (aleatorio == "0" && juego == "0") || 
    (aleatorio == "2" && juego == "2") ||
    (aleatorio == "1" && juego == "1")
){
    empate();
}else {
    noSirve();
}
    

function ganaUsuario() {
    alert("Ganaste")
}

function ganaPC() {
    alert("Perdiste")
}

function empate() {
    alert("Empataron")
}

function noSirve() {
    alert("Ingrese un numero valido")
}
console.log(aleatorio)

var miPass = "1234"
var miUser = "Emanuel"

var ingresoPass = prompt("Ingrese contrasenia","")
var ingresoUser = prompt("Ingrese usuario","")

var resultadoPass = (miPass == ingresoPass)
var resultadoUser = (miUser == ingresoUser)

if ( (resultadoPass == true) && (resultadoUser == true) ){
    alert("Bienvenido " + miUser)
}else{
    alert ("Contrasenia invalida o Usuario invalido")
}

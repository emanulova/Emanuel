
var usuario = "EMANUEL";
var password = "1234";

var user = prompt("Ingrese su usuario","");
var pass = prompt("Ingresa su contra","");

var usuarioValido = (usuario == user);
var passwordValido = (password == pass);

alert("El usuario:" + usuarioValido);
alert("La contra:" + passwordValido);

var ingresoCorrecto = usuarioValido && passwordValido;
alert("Puede ingresar: " + ingresoCorrecto);
if (usuarioValido && passwordValido){
    alert("Bienvenido");
} else{
    alert("Usuario o contrasenia incorrecta");
}
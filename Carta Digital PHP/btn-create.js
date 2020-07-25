console.log("btn-create.js::::::::Successfully Loaded");



function create(tt) {
    console.log('new POST ');
    var http = new XMLHttpRequest;

var titulo = tt;
var descripcion1 = '';
var precio = '0';
var valor = '1';

http.open("POST", "http://localhost:8888/Carta%20Digital%20PHP/create.php",true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.send("titulo="+titulo+"&descripcion="+descripcion1+"&precio="+precio+"&id="+valor+'"');
}

document.querySelector("#btn-create").addEventListener('click',create);
console.log("btn-update.js::::::::Successfully Loaded");



function update(idEdit,titleEdit,descriptionEdit,precioEdit) {
    console.log('POST Updated');
    var http = new XMLHttpRequest;

    // http.open("GET", "http://localhost:8888/Carta%20Digital%20PHP/update.php?titulo=tortas",true);
    // http.send();


var titulo = titleEdit;
var plato = idEdit;
// console.log(plato);
var descripcion = descriptionEdit;
var val = precioEdit;
http.open("POST", "http://localhost:8888/Carta%20Digital%20PHP/update.php",true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
var pepe = "titulo="+titulo+"&plato="+plato+"&descripcion="+descripcion+"&precio="+val;
console.log(pepe);
http.send("titulo="+titulo+"&plato="+plato+"&descripcion="+descripcion+"&precio="+val);
}

// document.querySelector("#btn-update").addEventListener('click',update);
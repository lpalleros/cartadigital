console.log("btn-delete.js::::::::Successfully Loaded");



function deleteFunction(id) {
    console.log(`id ${id} was deleted`);
    var http = new XMLHttpRequest;

http.open("POST", "http://localhost:8888/Carta%20Digital%20PHP/delete.php",true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.send("plato="+id);
}


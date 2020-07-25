// console.log('delegation.js::::::::Successfully Loaded');

document.body.addEventListener('click',edit);
document.body.addEventListener('click',deleteIcon);

//Edit Icon
function edit (e) {
    if (e.target.classList.contains('fa-save')) {
        var id = '#'+e.target.id; 
        var idSeleccionado = id.substr(5, 9);
        var pencil = document.querySelector(id);
        var titulo = '#titulo' + idSeleccionado;
        var descripcion = '#descripcion' + idSeleccionado;
        var precio = '#precio' + idSeleccionado;
        console.log(idSeleccionado);
        var inputTitulo = document.querySelector(titulo).value;
        var inputDescripcion = document.querySelector(descripcion).value;
        var inputPrecio = document.querySelector(precio).value;
        update(idSeleccionado,inputTitulo,inputDescripcion,inputPrecio);
    }       
}


//Delete Icon
function deleteIcon (e) {    
    if (e.target.classList.contains('fa-trash-o')) {
        var id = '#'+e.target.id; 
        var idSeleccionado = id.substr(7, 9);
        console.log(idSeleccionado);
        deleteFunction(idSeleccionado);
    }       
}

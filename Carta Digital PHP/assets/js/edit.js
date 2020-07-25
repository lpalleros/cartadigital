console.log('JS::edit.js::Successfully Loaded');
var edit = document.querySelector('#pencil1001');
edit.addEventListener('click',function(){
    console.log('Edit Enable');
    document.querySelector('.form-control-plaintext').removeAttribute('readonly');
    document.querySelector('.form-control-plaintext').classList.add('border');
    document.querySelector('.form-control-plaintext').classList.add('border-success');
    

});



console.log('JS::edit.js::Successfully Finished');
console.log('JS::save.js::Successfully Loaded');
var save = document.querySelector('#save1001');
save.addEventListener('click',function(){
    console.log('Edit Disabled... Saved Changes');
    document.querySelector('.form-control-plaintext').setAttribute('readonly',"");
    document.querySelector('.form-control-plaintext').classList.remove('border');
    document.querySelector('.form-control-plaintext').classList.remove('border-success');

    // const http1 = new XMLHttpRequest(); 
    // http1.open('POST', '/addpost1/', true);
    // http1.setRequestHeader('Content-type', 'application/json');
  //   var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     //document.getElementById("demo").innerHTML = this.responseText;
  //   }
  // };
  // xhttp.open("POST", "http://localhost:3000/addpost2", true);
  // xhttp.send();
    // let self = this;
    // http1.onload = function() {
    //   callback(null, self.http.responseText);
    // }
    // let post = {title:'dd', body:'This is post number one'};
    // http1.send(JSON.stringify(post));
    
});

// http.post('http://localhost:3000/addpost1/lucas',data, function(err, post) {
//   if(err) {
//     console.log(err);
//     console.log('no');
//   } else {
//     console.log(post);
//     console.log('yes');
//   }
// });

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "http://localhost:3000/addpost1", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();

console.log('JS::edit.js::Successfully Finished');
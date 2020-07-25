document.querySelector('#add-art').addEventListener('click',addComponent);

function addComponent() {
    //Row
var divR = document.createElement("div");
divR.classList.add('row');
//Col
var divC = document.createElement("div");
divC.classList.add('col');
//TEXT
var textnode = document.createTextNode("Water"); 


//hr
var hr = document.createElement("hr");

var divFlex = document.createElement("div");
divFlex.classList.add('d-flex');
divFlex.classList.add('flex-row');

var divFlex1 = document.createElement("div");
divFlex1.classList.add('d-flex');
divFlex1.classList.add('flex-row');
 
var textarea = document.createElement("textarea");

divFlex1.appendChild(textarea);

var icon = document.createElement("i");
icon.classList.add('fa');
icon.classList.add('fa-pencil');
icon.classList.add('text-primary');
divFlex1.appendChild(icon);

divFlex.appendChild(divFlex1);


var divFlex2 = document.createElement("div");
divFlex2.classList.add('d-flex');
divFlex2.classList.add('flex-row');
divFlex2.appendChild(textarea);
divFlex2.appendChild(icon);

divFlex.appendChild(divFlex2);
divFlex.appendChild(divFlex2);

divC.appendChild(hr);
divC.appendChild(divFlex);
divR.appendChild(divC);

// append Menu
document.querySelector('#menu').appendChild(divR); 
    
//:://
console.log('addComponent Successfully Loaded');
//:://
}


//:://
console.log('component.js Successfully Loaded');
//:://
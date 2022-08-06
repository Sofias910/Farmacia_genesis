var lorem = document.getElementById("antibioticos");
var imgtb = document.getElementById("imgantibioticos");
var loreme = document.getElementById("ensure");
var imge = document.getElementById("imgensure");
var populares = document.getElementById("mpopulares");
var imgpopulares = document.getElementById("verpopulares");
var loremvaporub = document.getElementById("vaporub");
var imgvarub = document.getElementById("vervaporub");
var loremcerave = document.getElementById("cerave");
var imgcerave = document.getElementById("vercerave");
var loremmniños = document.getElementById("mniños");
var imgniños = document.getElementById("vermniños");



function activar () {
    imgtb.classList.add("verimg");
}

lorem.addEventListener("click", activar);


function verensure () {
    imge.classList.add("vere");
}

loreme.addEventListener("click", verensure);


function verm () {
    imgpopulares.classList.add("imgpopulares");
}

populares.addEventListener("click", verm);



function verp () {
    imgvarub.classList.add("imgvaporub");
}

loremvaporub.addEventListener("click", verp);

function verc () {
    imgcerave.classList.add("imgcerave");
}

loremcerave.addEventListener("click", verc);

function verninoos () {
    imgniños.classList.add("imgmniños");
}

loremmniños.addEventListener("click", verninoos);

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// FUNCTIONS TO BE CALLED ON MOUSEOVER AND ONMOUSEOUT TO CHANGE COLOR OF HELLO WORLD
function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

//assigment
function infobutton() {
    document.getElementById("info").innerHTML = "This is Steven MacRae, a dancer from the Royal Opera House in London.";
}
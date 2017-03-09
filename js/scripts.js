//Variables and objects

var toggleMenu = document.getElementById("toggle-menu");
var menu = document.getElementById("toggle-nav");

//Functions

var mostrarMenu = function() {
	menu.classList.toggle("show-menu");
}

//Asigning Events

toggleMenu.addEventListener('click', mostrarMenu);
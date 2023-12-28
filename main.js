var burgerMenu = 
document.getElementById('burger-menu');

var overlay = 
document.getElementById('menu');

burgerMenu.addEventListener('click',
function() {
    this.classList.toggle("click");
    overlay.classList.toggle("overlay");
});

const menuButton = document.querySelector(".m-menu_button");
const menu = document.querySelector(".menu")
menuButton.addEventListener('click', function() {
    console.log('Кликнули по меню');
    menu.classList.toggle("is-open");
});
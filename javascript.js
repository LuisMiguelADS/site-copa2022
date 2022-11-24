const menu = document.querySelector('.nav-menu');
const NavMenu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
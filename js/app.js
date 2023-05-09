/// js toggle class
// document.getElementById('menu-toggle').addEventListener('click', (e) => {
//     e.preventDefault();
//     document.getElementById('menu-toggle').style.display = 'block';
//     document.querySelector('.menu').style.marginRight = '0px';
// });

$(document).ready(function() {
    const menuToggler = () => {
        const menuItem = document.querySelector('.menu-item');
        const toggler = document.querySelector('#menu-toggle');
    
        toggler.addEventListener('click', () => {
            const openMenu = menuItem.classList.toggle('open-menu');
        });
    }
    menuToggler();
});
let isOpen = false;
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('#mob-nav');
hamburger.addEventListener('click', () => {
    isOpen = !isOpen;
    isOpen ? nav.style.display = "block" : nav.style.display = "none";
})
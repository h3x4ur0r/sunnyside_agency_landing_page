let isOpen = false;
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('#mob-nav');
hamburger.addEventListener('click', () => {
    isOpen = !isOpen;
    if(isOpen) {
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }
})
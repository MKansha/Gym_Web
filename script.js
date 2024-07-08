document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.ham');
    const logo=document.querySelector('.nav_logo');
    const btn=document.querySelector('nav .btn')
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        logo.classList.toggle('none');
        btn.classList.toggle('none');
        
    });
});

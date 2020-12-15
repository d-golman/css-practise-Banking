'use strict';
document.addEventListener('DOMContentLoaded',()=>{
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll',()=>{
        if (window.scrollY > 0 ){
            navbar.style.backgroundColor = 'rgba(51, 51, 51,0.8)';
        }
        else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});

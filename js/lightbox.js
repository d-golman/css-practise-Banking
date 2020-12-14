'use strict';

document.addEventListener('DOMContentLoaded',()=>{
    const images = document.querySelector('.cases').querySelectorAll('img'); 
    
    let overlay = document.createElement('div');   
    document.querySelector('body').insertAdjacentElement('afterbegin', overlay);   


    images.forEach(e => {
        e.addEventListener('click',()=>{showImage(e);});
    });


    function showImage(e){
        toggleOverlay();
        let image = document.createElement('img');
        image.src = e.src;
        image.classList.add('modal-image');
        overlay.appendChild(image);
        document.body.style.overflow = 'hidden';
    }


    function toggleOverlay(){
        overlay.classList.toggle('overlay');
    }



});
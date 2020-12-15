'use strict';

document.addEventListener('DOMContentLoaded',()=>{
    const images = document.querySelector('.cases').querySelectorAll('img'); 
    let number;
    let overlay = document.createElement('div');   
    document.querySelector('body').insertAdjacentElement('afterbegin', overlay);   
    overlay.addEventListener('click', e => {        
        if (e.target.classList.contains('right-button')){  
            swapImage('right');
        }
        else if (e.target.classList.contains('left-button')){  
            swapImage('left');      
        }
        else if (e.target.tagName != 'img'){
            hideOverlay();
        }
    });

    images.forEach(e => {
        e.addEventListener('click',()=>{
            number = [].indexOf.call(images, e);
            showOverlay();
            showImage(e.src,e.alt);});
    });


    function showImage(url,alt = ''){
        overlay.innerHTML="";
        let image = document.createElement('div');
        let desc = document.createElement('div');
        let leftArrow = document.createElement('div');
        let rightArrow = document.createElement('div');
        leftArrow.classList.add('left-button');
        rightArrow.classList.add('right-button');
        desc.classList.add('text');
        desc.innerText = alt;
        image.style.backgroundImage = `url(${url})`;
        image.classList.add('modal-image');
        overlay.appendChild(image);
        image.appendChild(desc);
        image.appendChild(leftArrow);
        image.appendChild(rightArrow);
    }   

    function swapImage(direction){
        if (direction == 'right'){
            if (number == images.length-1){
                number = -1;
            }
            let image = images[++number];
            number = [].indexOf.call(images, image);
            showImage(image.src,image.alt);            
        }
        else{    
            if (number == 0){
                number = images.length;
            }
            let image = images[--number];
            number = [].indexOf.call(images, image);
            showImage(image.src,image.alt);         
        }
    }


    function showOverlay(){
        document.body.style.overflow = 'hidden';        
        overlay.classList.add('overlay','fadeOut');
    }

    function hideOverlay(){
        document.body.style.overflow='visible';
        overlay.innerHTML ='';
        overlay.classList.remove('overlay','fadeOut');
    }



});
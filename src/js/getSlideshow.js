import * as slide from './slideTransition';
import * as newSlideshow from './newSlideshow';

const addTitle = (slideshow) => {
    const rightArrow = document.createElement('button');
    const leftArrow = document.createElement('button');

    leftArrow.addEventListener('click', function(e){
        slide.previousSlide();
    }, false);

    rightArrow.addEventListener('click', function(e){
        slide.nextSlide();
    }, false);

    rightArrow.classList.add('to-right');
    rightArrow.id = 'toRight';
    rightArrow.innerHTML = "<span class='inner-btn'>></span>";

    leftArrow.classList.add('to-left');
    leftArrow.id = 'toLeft';
    leftArrow.innerHTML = "<span class='inner-btn'><</span>";

    const title = document.createElement('h2');
    title.innerHTML = slideshow.title;

    const zoneTitle = document.createElement('div');
    zoneTitle.classList.add('zone-title');

    zoneTitle.appendChild(title);
    zoneTitle.appendChild(rightArrow);
    zoneTitle.insertBefore(leftArrow, zoneTitle.childNodes[0]);

    document.title = slideshow.title + ' - Slideshow';
    
    app.insertBefore(zoneTitle, app.childNodes[0]);
}

const yolo = (slidesContainer) => {
    slidesContainer.querySelectorAll('.slide').forEach((element) => {
        const linkModal = document.querySelector('#linkModal');
        const overlay = document.querySelector('#overlay');

        const linkBtn = document.querySelector('#linkBtn');

        const theLink = element.querySelector('.content a');

        element.classList.remove('active');
        
        
        if(element.querySelectorAll('.link-edit').length){
            element.querySelector('.link-edit').addEventListener('click', function(e){
                linkModal.querySelector('#link').value = theLink.href;
                linkModal.querySelector('#linkTxt').value = theLink.innerHTML;
                linkModal.classList.add('active');
                overlay.classList.add('active');
            });
        }
        

    });
    
    slidesContainer.querySelectorAll('[data-slide-id="1"]')[0].classList.add('active');  
}

export const init = (data, app) => {
    const slideshow = data.val();
        
    const slidesContainer = document.createElement('div');
    slidesContainer.classList.add('slides-container');

    app.appendChild(slidesContainer);

    addTitle(slideshow);
    newSlideshow.showElement(document.querySelector('#actions'));  
    newSlideshow.hideElement(document.querySelector('#newSlide'));     
    newSlideshow.hideElement(document.querySelector('#save'));     
       
    
    localStorage.setItem('pwd', slideshow.pwd);


    slideshow.slides.forEach((element, i) => {
        slidesContainer.insertAdjacentHTML('beforeend', element);
    });


    yolo(slidesContainer);  
    
}
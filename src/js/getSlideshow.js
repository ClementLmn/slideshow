import * as slide from './slideTransition';
import * as newSlideshow from './newSlideshow';

const addTitle = (slideshow) => {
    const rightArrow = document.createElement('button');
    const leftArrow = document.createElement('button');

    leftArrow.addEventListener('click', function(e){
        slide.previousSlide(slideshow);
    }, false);

    rightArrow.addEventListener('click', function(e){
        slide.nextSlide(slideshow);
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
    slidesContainer.querySelector('.slide:first-child').classList.add('active');
}
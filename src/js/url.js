import * as db from './db';
import * as slide from './slideTransition';

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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

    document.title = slideshow.title;
    
    app.insertBefore(zoneTitle, app.childNodes[0]);
}

export const check = () => {
    const param = getParameterByName('i');
    if(!param) return;
    app.innerHTML = '';    
    db.get(`/${param}`).then(data => {
        const slideshow = data.val();


        
        const slidesContainer = document.createElement('div');
        slidesContainer.classList.add('slides-container');

        app.appendChild(slidesContainer);

        addTitle(slideshow);
        
        localStorage.setItem('pwd', slideshow.pwd);
        slideshow.slides.forEach((element, i) => {
            slidesContainer.insertAdjacentHTML('beforeend', element);
        });
        slidesContainer.querySelector('.slide:first-child').classList.add('active');
    });
}

export const go = (i) => {
    const separator = (window.location.href.indexOf("?")===-1)?"?":"&";
    window.location.href = window.location.href + separator + "i=" + i;
}

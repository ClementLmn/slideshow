/* MAIN FILE : ALL ACTIONS TO CONNECT VIEW WITH SERVER */
import * as url from './js/url';
import * as db from './js/db';
import * as newSlideshow from './js/newSlideshow';
import './style.css';

const app = document.querySelector('#app');
const join = document.querySelector('#join');
const newBtn = document.querySelector('#new');
const slideshow = document.querySelector('#slideshow');
const workspace = document.querySelector('#workspace');
const newSlideBtn = document.querySelector('#newSlide');

var slidesContainer;

db.init();
url.check();

if(join){
    join.addEventListener('click', function(){
        const input = document.querySelector('#joinValue');
        if(input.value){
            url.go(input.value);
        } 
    });
}

newBtn.addEventListener('click', () => {
    const tmp = document.createElement('div');
    tmp.classList.add('slides-container');
    app.innerHTML = '';
    app.appendChild(tmp);

    newSlideshow.showElement(slideshow);
    slidesContainer = document.querySelector('.slides-container');
    newSlideshow.insert(slideshow, slidesContainer);   
    newSlideshow.showElement(newSlideBtn); 
});

newSlideBtn.addEventListener('click', () => {
    newSlideshow.showElement(slideshow);
    newSlideshow.init(slideshow, slidesContainer);
});

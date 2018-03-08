/* MAIN FILE : ALL ACTIONS TO CONNECT VIEW WITH SERVER */
import * as url from './js/url';
import * as db from './js/db';
import * as url from './js/url';
import * as newSlideshow from './js/newSlideshow';
import './style.css';

const app = document.querySelector('#app');
const join = document.querySelector('#join');
const newBtn = document.querySelector('#new');
const slideshow = document.querySelector('#slideshow');
const workspace = document.querySelector('#workspace');
const actionsBtn = document.querySelector('#actions');

const btns = document.querySelector('.btns');
const newSlideBtn = document.querySelector('#newSlide');
const saveBtn = document.querySelector('#save');
const updateBtn = document.querySelector('#update');

const closeNewBtn = document.querySelector('#slideshow .close');

var slidesContainer;

db.init();
url.check(app);

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
    newSlideshow.showElement(actions);
    newSlideshow.hideElement(document.querySelector('#update'));
    
});

actionsBtn.addEventListener('click', () => {
    newSlideshow.toggleElement(btns);
});

newSlideBtn.addEventListener('click', () => {
    newSlideshow.showElement(slideshow);
    newSlideshow.showElement(closeNewBtn);
    newSlideshow.init(slideshow, slidesContainer);
});

closeNewBtn.addEventListener('click', () => {
    newSlideshow.hideElement(slideshow);
});

saveBtn.addEventListener('click', () => {
    let res = {
        pwd: '',
        slides: [],
        title: '',
        uid: 0
    };
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
        res.slides.push(slide.outerHTML);
    })
    console.log(db.push(res));
});

updateBtn.addEventListener('click', () => {
    const newSlides = [];

    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
        newSlides.push(slide.outerHTML);
    })
    db.update(url.getParameterByName('i'), newSlides);
});
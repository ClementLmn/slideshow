/* MAIN FILE : ALL ACTIONS TO CONNECT VIEW WITH SERVER */
import * as url from './js/url';
import * as db from './js/db';
import * as url from './js/url';
import * as newSlideshow from './js/newSlideshow';
import './style.css';

var res = {
    pwd: '',
    slides: [],
    title: ''
};

const app = document.querySelector('#app');
const join = document.querySelector('#join');
const newBtn = document.querySelector('#new');
const slideshow = document.querySelector('#slideshow');
const workspace = document.querySelector('#workspace');
const actionsBtn = document.querySelector('#actions');

const error = document.querySelector('#error');
const success = document.querySelector('#success');

const pwdModal = document.querySelector('#pwdModal');
const pwdValue = document.querySelector('#password');
const passwordBtn = document.querySelector('#passwordBtn');
const passwordCancel = document.querySelector('#passwordCancel');
const overlay = document.querySelector('#overlay');

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
    const title = document.querySelector('#newValue');
    res.title = title.value;

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
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
        res.slides.push(slide.outerHTML);
    })
    if(localStorage.getItem('id')){
        db.remove(localStorage.getItem('id'));
    }
    localStorage.setItem('id', db.push(res));
});

updateBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    pwdModal.classList.add('active');    
});

passwordCancel.addEventListener('click', () => {
    overlay.classList.remove('active');
    pwdModal.classList.remove('active');
});

passwordBtn.addEventListener('click', () => {
    const mdp = localStorage.getItem('pwd');
    const testMdp = pwdValue.value;
    
    if(mdp == testMdp){
        console.log(mdp, testMdp, 'good');
        
        success.classList.add('active');
        setTimeout(() => {
            remove.classList.remove('active');
        }, 3000);
        
        const newSlides = [];

        let slides = document.querySelectorAll('.slide');
        slides.forEach((slide) => {
            newSlides.push(slide.outerHTML);
        })
        db.update(url.getParameterByName('i'), newSlides);
    }else{
        console.log(mdp, testMdp, 'bad');
        
        error.classList.add('active');
        setTimeout(() => {
            error.classList.remove('active');
        }, 3000);
    }

    overlay.classList.remove('active');
    pwdModal.classList.remove('active');
});
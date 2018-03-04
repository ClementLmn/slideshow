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
    workspace.style.display = 'block';
    slideshow.style.display = 'block';
    app.style.display = 'none';
    newSlideshow.insert(slideshow, workspace);
});

newSlideBtn.addEventListener('click', () => {
    newSlideshow.showChoices();
    newSlideshow.init(workspace);
});

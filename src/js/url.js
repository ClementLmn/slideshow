import * as db from './db';

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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

        const titleLine = `<div class='zone-title'><button id='toLeft' class='to-left'><span class='inner-btn'><</span></button><h2>${slideshow.title}</h2><button id='toRight' class='to-right'><span class='inner-btn'>></span></button>`;

        app.insertAdjacentHTML('afterbegin', titleLine);
        
        localStorage.setItem('pwd', slideshow.pwd);
        slideshow.slides.forEach(element => {
            slidesContainer.insertAdjacentHTML('beforeend', element);
        });
        document.title = slideshow.title;
    });
}

export const go = (i) => {
    const separator = (window.location.href.indexOf("?")===-1)?"?":"&";
    window.location.href = window.location.href + separator + "i=" + i;
}

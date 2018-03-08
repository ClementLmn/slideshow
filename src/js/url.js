import * as db from './db';
import * as slide from './slideTransition';
import * as getSlideshow from './getSlideshow';

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export const check = (app) => {
    const param = getParameterByName('i');
    if(!param) return;
    app.innerHTML = '';
    db.get(`/${param}`).then(data => {
        getSlideshow.init(data, app)
    });
}

export const go = (i) => {
    const separator = (window.location.href.indexOf("?")===-1)?"?":"&";
    window.location.href = window.location.href + separator + "i=" + i;
}

/* MAIN FILE : ALL ACTIONS TO CONNECT VIEW WITH SERVER */
import * as url from './js/url'
import * as db from './js/db'

const app = document.querySelector('#app');
const join = document.querySelector('#join');

db.init();
url.check();

if(join.length){
    join.addEventListener('click', function(){
        const input = document.querySelector('#joinValue');
        if(input.value) url.go(input.value);
    });
}
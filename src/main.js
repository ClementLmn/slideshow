/* MAIN FILE : ALL ACTIONS TO CONNECT VIEW WITH SERVER */
import * as url from './js/url'

const config = {
    apiKey: "AIzaSyBo9ND2NmHSGXpLb6-CRp8Epyn9lRQJbP8",
    authDomain: "slideshow-dc259.firebaseapp.com",
    databaseURL: "https://slideshow-dc259.firebaseio.com",
    projectId: "slideshow-dc259",
    storageBucket: "slideshow-dc259.appspot.com",
    messagingSenderId: "104655350834"
};
firebase.initializeApp(config);

const app = document.querySelector('#app');

url.check();

document.querySelector('#join').addEventListener('click', function(){
    const input = document.querySelector('#joinValue');
    if(input.value) url.go(input.value);
});
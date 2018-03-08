import * as slide from './slideTransition';

const MODELS = [
    {
        'name': 'TITRE',
        'template': "<div class='bg'><img src='.'></div><div class='content'><h1 class='center' contenteditable='true'>Votre titre ici</h1></div>",
        'choice': 1
    },
    {
        'name': 'TITRE + TEXTE + LIEN',
        'template': "<div class='bg'><img src='.'></div><div class='content'><h1 class='top' contenteditable='true'>Votre titre ici</h1><p class='bottom' contenteditable='true'>Votre texte ici</p><div class='wrapper-link'><a href='#' target='_blank'>Un lien</a><span class='link-edit'>Éditer</span></div></div>",
        'choice': 2
    },
    {
        'name': 'TITRE + TEXTE',
        'template': "<div class='bg'><img src='.'></div><div class='content'><h1 class='top' contenteditable='true'>Votre titre ici</h1><p class='bottom' contenteditable='true'>Votre texte ici</p></div>",
        'choice': 3
    },
    {
        'name': 'SOUS-TITRE + TITRE + TEXTE + LIEN',
        'template': "<div class='bg'><img src='.'></div><div class='content'><h2 contenteditable='true'>Votre texte ici</h2><h1 class='top' contenteditable='true'>Votre titre ici</h1><p class='bottom' contenteditable='true'>Votre texte ici</p><div class='wrapper-link'><a href='#' target='_blank'>Un lien</a><span class='link-edit'>Éditer</span></div></div>",
        'choice': 4
    },
    {
        'name': 'TEXTE + LIEN',
        'template': "<div class='bg'><img src='.'></div><div class='content'><p class='left' contenteditable='true'>Votre texte ici</p><div class='wrapper-link'><a href='#' target='_blank'>Un lien</a><span class='link-edit'>Éditer</span></div></div>",
        'choice': 5
    },
    {
        'name': 'TEXTE',
        'template': "<div class='bg'><img src='.'></div><div class='content'><p class='right' contenteditable='true'>Votre texte ici</p></div>",
        'choice': 6,
    }
];

let cpt = 0;
var choices;
var choicesEl;

export const createModels = (slideshow) => {
    let models = document.createElement('div');
    models.className = 'models';

    MODELS.forEach((model) => {
        let tmp = document.createElement('div');
        tmp.classList.add('model');
        tmp.setAttribute('id', model.name);
        tmp.insertAdjacentHTML('beforeend', model.template);
        models.appendChild(tmp);
    });

    slideshow.appendChild(models);
}

export const createChoices = (slideshow) => {
    let choices = document.createElement('ul');
    choices.className = 'choices';

    MODELS.forEach((model) => {
        let tmp = document.createElement('li');
        tmp.value = model.choice;

        let txt = document.createTextNode(model.name);
        tmp.appendChild(txt);
    
        choices.appendChild(tmp);
    });

    slideshow.appendChild(choices);
}

export const addSlide = (slideshow, slide, id, model) => {
    const current = document.querySelector('.slide.active');
    if(current) current.classList.remove('active');

    slide.removeAttribute('id');
    slide.classList.remove('model');
    slide.classList.add('slide', 'active');
    slide.dataset.slideId = id;
    slide.dataset.slideModel = model;

    return slide;
}

const addTitle = (t, workspace) => {
    const rightArrow = document.createElement('button');
    const leftArrow = document.createElement('button');

    leftArrow.addEventListener('click', function(e){
        slide.previousSlide();
    }, false);

    rightArrow.addEventListener('click', function(e){
        slide.nextSlide();
    }, false);

    rightArrow.classList.add('to-right');
    rightArrow.id = 'toRight';
    rightArrow.innerHTML = "<span class='inner-btn'>></span>";

    leftArrow.classList.add('to-left');
    leftArrow.id = 'toLeft';
    leftArrow.innerHTML = "<span class='inner-btn'><</span>";

    const title = document.createElement('h2');
    title.innerHTML = t;

    const zoneTitle = document.createElement('div');
    zoneTitle.classList.add('zone-title');

    zoneTitle.appendChild(title);
    zoneTitle.appendChild(rightArrow);
    zoneTitle.insertBefore(leftArrow, zoneTitle.childNodes[0]);

    document.title = t + ' - Slideshow';
    
    workspace.insertBefore(zoneTitle, workspace.childNodes[0]);
}

export const openBgSelect = () => {
    document.querySelector('#bgModal').classList.add('active');
    document.querySelector('#overlay').classList.add('active');
}

export const closeBgSelect = () => {
    document.querySelector('#bgModal').classList.remove('active');
    document.querySelector('#overlay').classList.remove('active');
}

export const insert = (slideshow, workspace, title) => {
    createModels(slideshow);
    createChoices(slideshow);
    
    choices = document.querySelector('.choices');
    choicesEl = document.querySelectorAll('.choices li');

    addTitle(title, workspace);

    init(slideshow, workspace);
}

export const init = (slideshow, workspace) => {
    const onModelSelect = (modelId) => {
        const model = document.querySelector('#model-' + modelId);
        let tmp = model.cloneNode(true);
        cpt++;

        let res = addSlide(slideshow, tmp, cpt, modelId);
        const linkModal = document.querySelector('#linkModal');
        const overlay = document.querySelector('#overlay');

        const linkBtn = document.querySelector('#linkBtn');

        const theLink = res.querySelector('.content a');

        if(res.querySelectorAll('.link-edit').length){
            res.querySelector('.link-edit').addEventListener('click', function(e){
                linkModal.querySelector('#link').value = theLink.href;
                linkModal.querySelector('#linkTxt').value = theLink.innerHTML;
                linkModal.classList.add('active');
                overlay.classList.add('active');
            });
        }
    
        workspace.appendChild(res);
    }
    
    choicesEl.forEach((element) => {
        element.onclick = () => {
            onModelSelect(element.value);
            hideElement(slideshow);
            openBgSelect();
        }
    });
}

export const showElement = (element) => {
    element.style.display = 'flex';
}

export const hideElement = (element) => {
    element.style.display = 'none';
}

export const toggleElement = (element) => {
    if(element.style.display === 'flex' ){
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

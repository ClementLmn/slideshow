const MODELS = [
    {
        'name': 'model-1',
        'template': "<h1 class='center' contenteditable='true'>Votre titre ici</h1>",
        'choice': 1
    },
    {
        'name': 'model-2',
        'template': "<h1 class='top' contenteditable='true'>Votre titre ici</h1><p class='left' contenteditable='true'>Votre texte ici</p><img class='right' src='.'><p class='bottom' contenteditable='true'>Votre texte ici</p>",
        'choice': 2
    },
    {
        'name': 'model-3',
        'template': "<h1 class='top' contenteditable='true'>Votre titre ici</h1><img class='left' src='.'><p class='right' contenteditable='true'>Votre texte ici</p><p class='bottom' contenteditable='true'>Votre texte ici</p>",
        'choice': 3
    },
    {
        'name': 'model-4',
        'template': "<h1 class='top' contenteditable='true'>Votre titre ici</h1><h2 contenteditable='true'>Votre texte ici</h2><p class='bottom' contenteditable='true'>Votre texte ici</p>",
        'choice': 4
    },
    {
        'name': 'model-5',
        'template': "<p class='left' contenteditable='true'>Votre texte ici</p><img class='right' src='.'>",
        'choice': 5
    },
    {
        'name': 'model-6',
        'template': "<img class='left' src='.'><p class='right' contenteditable='true'>Votre texte ici</p>",
        'choice': 6
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

export const insert = (slideshow, workspace) => {
    createModels(slideshow);
    createChoices(slideshow);
    
    choices = document.querySelector('.choices');
    choicesEl = document.querySelectorAll('.choices li');

    init(slideshow, workspace);
}

export const init = (slideshow, workspace) => {
    const onModelSelect = (modelId) => {
        const model = document.querySelector('#model-' + modelId);
        let tmp = model.cloneNode(true);
        cpt++;
    
        tmp.removeAttribute('id');
        tmp.className = 'slide';
        tmp.dataset.slideId = cpt;
        tmp.dataset.slideModel = modelId;
    
        workspace.appendChild(tmp);
    }
    
    choicesEl.forEach((element) => {
        element.onclick = () => {
            onModelSelect(element.value);
            hideElement(slideshow);
        }
    });
}

export const showElement = (element) => {
    element.style.display = 'flex';
}

export const hideElement = (element) => {
    element.style.display = 'none';
}

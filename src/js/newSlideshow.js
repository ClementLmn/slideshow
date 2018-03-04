const MODELS = [
    {
        'name': 'model-1',
        'template': "<h1 class='center'></h1>",
        'choice': 1
    },
    {
        'name': 'model-2',
        'template': "<h1 class='top'></h1><p class='left'></p><img class='right' src='.'><p class='bottom'></p>",
        'choice': 2
    },
    {
        'name': 'model-3',
        'template': "<h1 class='top'></h1><img class='left' src='.'><p class='right'></p><p class='bottom'></p>",
        'choice': 3
    },
    {
        'name': 'model-4',
        'template': "<h1 class='top'></h1><p class='center'></p><p class='bottom'></p>",
        'choice': 4
    },
    {
        'name': 'model-5',
        'template': "<p class='left'></p><img class='right' src='.'>",
        'choice': 5
    },
    {
        'name': 'model-6',
        'template': "<img class='left' src='.'><p class='right'></p>",
        'choice': 6
    }
]

let cpt = 0;
var choices;
var choicesEl;

export const createModels = (slideshow) => {
    let models = document.createElement('div');
    models.className = 'models';

    MODELS.forEach((model) => {
        let tmp = document.createElement('div');
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

    init(workspace);
}

export const init = (workspace) => {
    const onModelSelect = (modelId) => {
        const model = document.querySelector('#model-' + modelId);
        let tmp = model.cloneNode(true);
        cpt++;
    
        tmp.removeAttribute('id');
        tmp.dataset.slideId = cpt;
        tmp.dataset.slideModel = modelId;
    
        hideChoices();
        workspace.appendChild(tmp);
    }
    
    choicesEl.forEach((element) => {
        element.onclick = () => {
            onModelSelect(element.value);
        }
    });
}

export const showChoices = () => {
    choices.style.display = 'block';
}

export const hideChoices = () => {
    choices.style.display = 'none';
}

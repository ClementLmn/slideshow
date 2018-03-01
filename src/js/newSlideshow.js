const MODELS = "<div class='models'><div id='model-1'><h1 class='center'></h1></div>" +
    "<div id='model-2'><h1 class='top'></h1><p class='left'></p><img class='right' src='.'><p class='bottom'></p></div><div id='model-3'><h1 class='top'></h1><img class='left' src='.'><p class='right'></p><p class='bottom'></p></div>" +
    "<div id='model-4'><h1 class='top'></h1><p class='center'></p><p class='bottom'></p></div>" +
    "<div id='model-5'><p class='left'></p><img class='right' src='.'></div>" +
    "<div id='model-6'><img class='left' src='.'><p class='right'></p></div></div>";
const CHOICES = "<ul class='choices'><li value='1'>1</li><li value='2'>2</li><li value='3'>3</li>" +
    "<li value='4'>4</li><li value='5'>5</li><li value='6'>6</li></ul>";
    
let choices;
let choicesEl;
let cpt = 0;

export const insert = (slideshow, workspace) => {
    slideshow.insertAdjacentHTML('beforeend', MODELS);
    slideshow.insertAdjacentHTML('beforeend', CHOICES);
    
    choices = document.querySelector('.choices');
    choicesEl = document.querySelectorAll('.choices li');

    init(workspace);
}

export const init = (workspace) => {
    const onModelSelect = (modelId) => {
        const model = document.querySelector('#model-' + modelId);
        cpt++;
    
        model.removeAttribute('id');
        model.dataset.slideId = cpt;
        model.dataset.slideModel = modelId;
    
        choices.style.display = 'none';
        workspace.appendChild(model);
    }
    
    choicesEl.forEach((element) => {
        element.onclick = () => {
            onModelSelect(element.value);
        }
    });
}


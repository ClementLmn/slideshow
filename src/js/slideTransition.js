export const previousSlide = (slideshow) => {
    const current = document.querySelector('.slide.active');
    const currentNb = current.dataset.slideId;
    if(currentNb == 1) return;
    const prevSlide = document.querySelector(`[data-slide-id='${parseInt(currentNb)-1}']`);
    current.classList.remove('active');
    prevSlide.classList.add('active');
     
}

export const nextSlide = (slideshow) => {
    const current = document.querySelector('.slide.active');
    const currentNb = current.dataset.slideId;
    if(currentNb == slideshow.slides.length) return;
    const nextSlide = document.querySelector(`[data-slide-id='${parseInt(currentNb)+1}']`);    
    current.classList.remove('active');
    nextSlide.classList.add('active');
}
const translateDiv = document.querySelector('#translate');
translateDiv.addEventListener('mouseover', (e) => {
    translateDiv.classList.toggle('translate');
});

const scaleDiv = document.querySelector('#scale');
scaleDiv.addEventListener('mouseover', (e) => {
    scaleDiv.classList.toggle('scale');
});

const rotateDiv = document.querySelector('#rotate');
rotateDiv.addEventListener('mouseover', (e) => {
    rotateDiv.classList.toggle('rotate');
});

const skewDiv = document.querySelector('#skew');
skewDiv.addEventListener('mouseover', (e) => {
    skewDiv.classList.toggle('skew');
});

const transitionDiv = document.querySelector('#transition');
transitionDiv.addEventListener('mouseover', (e) => {
    transitionDiv.classList.toggle('transition');
});

// require('dotenv').config()

let container = document.querySelector('.custom-container');
let layers = document.querySelectorAll('.custom-layer');
let innerWidth = window.innerWidth;
let parallaxSpeed;
container.onscroll = function (){
    let X = container.scrollTop;

    if (innerWidth > 2000) {
        parallaxSpeed = 8;
    } else {
        parallaxSpeed = 16;
    }

    for(let i=1; i<layers.length+1;i++) {
        layers[i-1].style.left='-'+X/(parallaxSpeed/i)+'px';
    }
}

// ------------- script to play css when in viewport -------------- //
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
});
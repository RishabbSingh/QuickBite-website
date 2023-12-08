// nav toggler

let toggleBtn =  document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('active');
})


// dish slider

let dishSlider = document.querySelector('.dish-slider');

let rotationVal = 0;

setInterval(() => {

    rotationVal += 120;

    dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;

}, 3000)

AOS.init();
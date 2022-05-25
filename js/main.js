const pic = document.querySelector('#main-shoe');
const cyan = document.querySelector('.cyan');
const purple = document.querySelector('.purple');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const colors = document.querySelectorAll('.color');

// store product info in object
const info = {
    cyan: "./images/products/cyan.png",
    purple: "./images/products/purple.png",
    blue: "./images/products/blue.png",
    red: "./images/products/red.png",
    green: "./images/products/green.png",
    pink: "./images/products/pink.png",
};


// change color
cyan.addEventListener('click', () => {
    pic.src = info['cyan']
})

purple.addEventListener('click', () => {
    pic.src = info['purple'];
})

blue.addEventListener('click', () => {
    pic.src = info['blue'];
})

red.addEventListener('click', () => {
    pic.src = info['red'];
})

pink.addEventListener('click', () => {
    pic.src = info['pink'];
})

green.addEventListener('click', () => {
    pic.src = info['green'];
})


colors.forEach(c => c.addEventListener('click', function (evt) {
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}));
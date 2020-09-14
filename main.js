// RGB block work

const rgbBlock = document.querySelector('.rgb-block');
const rgbButton = document.querySelector('.rgb-button');
const rgbNumbers = document.querySelector('.rgb-numbers');

rgbButton.addEventListener('click', rgbColorChange);

function rgbColorChange(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    rgbBlock.style.backgroundColor =
    'rgb('+red + ',' + green + ',' + blue +')';

    rgbNumbers.innerHTML =
    red + ', ' + green + ', ' + blue;
}

// HEX block work

const hexBlock = document.querySelector('.hex-block')
const hexButton = document.querySelector('.hex-button');
const hexNumbers = document.querySelector('.hex-numbers');

const hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

hexButton.addEventListener('click', hexColorChange);

function hexColorChange(){
    let hex = '#';

    for (let i =0; i<6; i++){
        let random = Math.floor(Math.random()*hexColors.length);
        hex += hexColors[random];
}
hexNumbers.innerHTML = hex;
hexBlock.style.backgroundColor = hex;
}

//form popup

const formOpenButton = document.querySelector('.formOpenButton');
const formWindow = document.querySelector('.form__wrapper');
const formCloseButton = document.querySelector('.form__close-button');

formOpenButton.addEventListener('click', function(event){
    event.preventDefault();
    formWindow.classList.add('opened')
})
formCloseButton.addEventListener('click', function(event){
    event.preventDefault();
    formWindow.classList.remove('opened')
})

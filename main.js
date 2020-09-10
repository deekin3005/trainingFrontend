const bodyBcg = document.querySelector('body');
const bgButton = document.querySelector('.bg-button');
const rgbNumbers = document.querySelector('.rgb-numbers');

bgButton.addEventListener('click',bgColor);

function bgColor (){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    bodyBcg.style.backgroundColor =
    'rgb('+red + ',' + green + ',' + blue +')';

    rgbNumbers.innerHTML =
    red + ', ' + green + ', ' + blue;
}

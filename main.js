const bodyBcg = document.querySelector('body');
const bgButton = document.querySelector('.bg-button');

bgButton.addEventListener('click',bgColor);

function bgColor (){
    bodyBcg.style.backgroundColor =
    'rgb('+ Math.floor(Math.random()*255) + ',' +
    Math.floor(Math.random()*255) + ',' +
    Math.floor(Math.random()*255) +')';
}

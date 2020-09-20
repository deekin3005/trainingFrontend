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

const formOpenButton = document.querySelector('.form-open-button');
const formWindow = document.querySelector('.form__overlay');
const formCloseButton = document.querySelector('.form__close-button');

formOpenButton.addEventListener('click', function(event){
    event.preventDefault();
    formWindow.classList.add('opened')
})
formCloseButton.addEventListener('click', function(event){
    event.preventDefault();
    formWindow.classList.remove('opened')
})

//Troll popup

const trollOverlay = document.querySelector('.troll__overlay')
const trollOpenButton = document.querySelector('.troll-open-button');
const trollCloseButton = document.querySelector('.troll__close-button');
const trollActivateButton = document.querySelector('.troll__button');
const trollSays = document.querySelector('.troll__says');

const trollWord1 = ['вонючая','тупая','гнусная','долбаная','чмошная','дерьмовая'];
const trollWord2 = ['псина','какашка','кочерышка','гнида','сволочь','макака'];

trollOpenButton.addEventListener('click', function(event){
    event.preventDefault();
    trollOverlay.classList.add('opened');
})
trollCloseButton.addEventListener('click', function(event){
    event.preventDefault();
    trollOverlay.classList.remove('opened')
})

trollActivateButton.addEventListener('click', function(trollFunction){
    trollFunction.preventDefault();
    let a = Math.floor(Math.random()*trollWord1.length);
    let b = Math.floor(Math.random()*trollWord2.length);
    trollSays.innerHTML = 'Ну ты ' + trollWord1[a] + ' ' + trollWord2[b] + '!';
})

// Hangman game

const hangmanStartButton = document.querySelector('.hangman__start-button');
const hangmanInput = document.querySelector('.hangman__input');
const hangmanOutput = document.querySelector('.hangman__output');
const hangmanButton = document.querySelector('.hangman__button');

const hangmanWords = ['велосипедист','самосвал','электромобиль','аквамарин',]

hangmanStartButton.addEventListener('click', hangmanStartGame)

function hangmanStartGame() {
    let hangmanWord = hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
    for(i=0; i<hangmanWord.length; i++){
        hangmanOutput.innerHTML += '_'
    }
}

let fenceLength = 0,
fenceHeight = 0,
montage = 1;

// FORM working process

$('#fence-length').on('keyup', function(){
    fenceLength = $(this).val();
    $('.sum-counted').text(fenceLength * fenceHeight * montage);
})
$('#fence-height').on('keyup', function(){
    fenceHeight = $(this).val();
    $('.sum-counted').text(fenceLength * fenceHeight * montage);
})

$('#montage').on('click', function(){
    if ($(this).is(':checked')){
        montage = 1.4;
        $('.sum-counted').text(fenceLength * fenceHeight * montage);
    } else {
        montage = 1;
        $('.sum-counted').text(fenceLength * fenceHeight * montage);
    }
})
'use strict';
//Declarar constantes globales
const playButton = document.querySelector('.js_button');
const gameSelector = document.querySelector('.js_button');
const btnGameResult = document.querySelector('.btn__js__generalresult');
const playerResult = document.querySelector('.js_counts__player');
const computerResult = document.querySelector('.js-counts__computer');



//Funciones

function handleClickGame() {
    console.log("hola");

}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(10) - 1;

function getuserTool() {
    const UserSelection = gameSelector.value;

}


















//Listener
playButton.addEventListener('click', handleClickGame);



'use strict';
//Declarar constantes globales
const playButton = document.querySelector('.js_button');
const gameSelector = document.querySelector('.js_game');
const btnGameResult = document.querySelector('.btn__js__generalresult');
const playerResult = document.querySelector('.js_counts__player');
const computerResult = document.querySelector('.js-counts__computer');
let userWin = 0;
let computerWin = 0;





//Function

//1. Handle

function handleClickGame(event) {
    event.preventDefault();
    getuserTool();
    compareResults()
    //console.log("hola");

}

//2. Get random number

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(10) - 1;

let randomTool = "";
let user

//3. Get input value

function getuserTool() {

    if (randomNumber > 3) {
        randomTool = 'piedra';
    }
    else if (randomNumber >= 6) {
        randomTool = 'papel';

    }
    else if (randomNumber >= 7) {
        randomTool = 'tijera';
    }

}
//4.Results comparition

function compareResults() {
    let userSelection = gameSelector.value;
    console.log(userSelection, randomTool);


    if (userSelection === randomTool) {
        btnGameResult.innerHTML = "Empate";
    } else if (userSelection === 'piedra' && randomTool === 'tijera') {
        btnGameResult.innerHTML = "¡Has ganado!";

        playerVictory();


    }
    else if (userSelection === 'tijera' && randomTool === 'papel') {
        btnGameResult.innerHTML = "¡Has ganado!";
        playerVictory();
    }
    else if (userSelection === 'papel' && randomTool === 'tijera') {
        btnGameResult.innerHTML = "Has perdido"; computerVictory();

    }
    else if (userSelection === 'papel' && randomTool === 'piedra') {
        btnGameResult.innerHTML = "¡Has ganado!";
        playerVictory();
    }
    else if (userSelection === 'tijera' && randomTool === 'piedra') {
        btnGameResult.innerHTML = "Has perdido"; computerVictory();
    }
    else if (userSelection === 'piedra' && randomTool === 'papel') {
        btnGameResult.innerHTML = "Has perdido";
        computerVictory();
    }
}
//5.counter winner (2 functions)

function playerVictory() {
    userWin++;
    playerResult.innerHTML = userWin;
}
//counter computer

function computerVictory() {
    computerWin++;
    computerResult.innerHTML = computerWin;
}




















//Listener
playButton.addEventListener('click', handleClickGame);



"use strict";

// const { render } = require("node-sass");

//Declarar constantes globales
const playButton = document.querySelector(".js_button");
const resetButton = document.querySelector(".js_button__reset");
const gameSelector = document.querySelector(".js_game");
const btnGameResult = document.querySelector(".btn__js__generalresult");
const playerResult = document.querySelector(".js_counts__player");
const computerResult = document.querySelector(".js-counts__computer");
const totalPlayed = document.querySelector('.js-counts__total');
let randomNumber = 0;
let userWin = 0;
let computerWin = 0;
let totalGame = 0;


//Function

//1. Handle

function handleClickGame(event) {
    event.preventDefault();

    randomNumber = getRandomNumber(10) - 1;
    getuserTool();
    compareResults();
    totalRounds()


}

//2. Get random number

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


let randomTool = "";
let user;

//3. Get input value

function getuserTool() {
    if (randomNumber > 3) {
        randomTool = "piedra";
    } else if (randomNumber >= 6) {
        randomTool = "papel";
    } else if (randomNumber >= 7) {
        randomTool = "tijera";
    }
}

function renderButton(render) {
    btnGameResult.innerHTML = render;
}
//4.Results comparition

function compareResults() {
    let userSelection = gameSelector.value;
    totalGame++;

    if (userSelection === randomTool) {
        renderButton("Empate");
    } else if (userSelection === "piedra" && randomTool === "tijera") {
        renderButton("¡Has ganado!");

        playerVictory();
    } else if (userSelection === "tijera" && randomTool === "papel") {
        renderButton("¡Has ganado!");
        playerVictory();
    } else if (userSelection === "papel" && randomTool === "tijera") {
        renderButton("¡Has perdido!");
        computerVictory();
    } else if (userSelection === "papel" && randomTool === "piedra") {
        renderButton("¡Has ganado!");
        playerVictory();
    } else if (userSelection === "tijera" && randomTool === "piedra") {
        renderButton("¡Has perdido!");
        computerVictory();
    } else if (userSelection === "piedra" && randomTool === "papel") {
        renderButton("¡Has perdido!");
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

function counter() {
    playerVictory()
    computerVictory()
}





function totalRounds() {
    totalGame + 1
    totalPlayed.innerHTML = totalGame;




}
function resetGame(event) {
    userWin = 0;
    computerWin = 0;
    totalGame = 0;

    event.preventDefault();
    playerResult.innerHTML = "";
    computerResult.innerHTML = "";
    totalPlayed.innerHTML = "";
    btnGameResult.innerHTML = "¡Vamos a jugar!"



}

//Listener
playButton.addEventListener("click", handleClickGame);
resetButton.addEventListener("click", resetGame);

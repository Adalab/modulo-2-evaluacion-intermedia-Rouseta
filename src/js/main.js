"use strict";

// const { render } = require("node-sass");

//Declarar constantes globales
const playButton = document.querySelector(".js_button");
const gameSelector = document.querySelector(".js_game");
const btnGameResult = document.querySelector(".btn__js__generalresult");
const playerResult = document.querySelector(".js_counts__player");
const computerResult = document.querySelector(".js-counts__computer");
let userWin = 0;
let computerWin = 0;

//Function

//1. Handle

function handleClickGame(event) {
    event.preventDefault();
    getRandomNumber();
    getuserTool();
    compareResults();
    counters();
    //console.log("hola");
}

//2. Get random number

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(10) - 1;

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
//4.Results comparition
function renderButton(render) {
    btnGameResult.innerHTML = render;
}

function compareResults() {
    let userSelection = gameSelector.value;

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
function counters() {
    playerVictory();
    computerVictory();

}

//Listener
playButton.addEventListener("click", handleClickGame);

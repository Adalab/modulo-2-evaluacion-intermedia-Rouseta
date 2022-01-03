"use strict";const playButton=document.querySelector(".js_button"),gameSelector=document.querySelector(".js_game"),btnGameResult=document.querySelector(".btn__js__generalresult"),playerResult=document.querySelector(".js_counts__player"),computerResult=document.querySelector(".js-counts__computer"),totalPlayed=document.querySelector(".js-counts__total");let userWin=0,computerWin=0,totalGame=0;function handleClickGame(e){e.preventDefault(),getRandomNumber(),getuserTool(),compareResults(),counters()}function getRandomNumber(e){return Math.ceil(Math.random()*e)}const randomNumber=getRandomNumber(10)-1;let user,randomTool="";function getuserTool(){randomNumber>3?randomTool="piedra":randomNumber>=6?randomTool="papel":randomNumber>=7&&(randomTool="tijera")}function renderButton(e){btnGameResult.innerHTML=e}function compareResults(){let e=gameSelector.value;totalGame++,e===randomTool?renderButton("Empate"):"piedra"===e&&"tijera"===randomTool||"tijera"===e&&"papel"===randomTool?(renderButton("¡Has ganado!"),playerVictory()):"papel"===e&&"tijera"===randomTool?(renderButton("¡Has perdido!"),computerVictory()):"papel"===e&&"piedra"===randomTool?(renderButton("¡Has ganado!"),playerVictory()):("tijera"===e&&"piedra"===randomTool||"piedra"===e&&"papel"===randomTool)&&(renderButton("¡Has perdido!"),computerVictory())}function playerVictory(){userWin++,playerResult.innerHTML=userWin}function computerVictory(){computerWin++,computerResult.innerHTML=computerWin}function counters(){playerVictory(),computerVictory()}function totalRounds(){totalGame++,totalGame.innerHTML=totalGame}playButton.addEventListener("click",handleClickGame);
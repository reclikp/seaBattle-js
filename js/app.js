const btnStart = document.querySelector("#button-menu-start-game");
const btnSettings = document.querySelector("#button-menu-settings");
const btnScoreboard = document.querySelector("#button-menu-scoreboard");

const gameVersion = "0.1";

function startGame(){
    document.querySelector(".main-menu").classList.toggle("hide");
    document.querySelector(".start-menu").classList.remove("hide");

};

btnStart.addEventListener("click", startGame);

//loaded when page is loaded
window.onload = function() {
    document.querySelector("#game-version").innerHTML = "ver " + gameVersion;
}
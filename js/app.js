// Constants and variables
const gameVersion = "0.1";

const boardRows = 10;
const boardCols = 10;
var canvasSize = 500;
var areaSize = canvasSize / boardRows;

var latestScreen = ".main-menu";
var activeScreen = ".main-menu";


/* Buttons Definitions */
const btnStart = document.querySelector("#button-menu-start-game");
const btnSettings = document.querySelector("#button-menu-settings");
const btnScoreboard = document.querySelector("#button-menu-scoreboard");
const btnScreenBack = document.querySelectorAll('#button-screen-back');

// Lan Multiplayer
const btnStartLan = document.querySelector("#button-start-game-multiplayer-local");
const btnSetNicknames = document.querySelector("#button-set-nicknames");



/* Buttons Listeners */
btnStart.addEventListener("click", startGame);
btnStartLan.addEventListener("click", startGame_LanMultiplayer);
btnSetNicknames.addEventListener("click", validateNicknames);

for(let element of btnScreenBack){
    element.addEventListener("click", screenBack);
}


/* Objects */
function Player(parent, selector){
    this.nickname;
    this.board = getInitialBoard("");
    this.enemyBoard = getInitialBoard("");
}


/*           */
/* Functions */
/*            */

// Basic onload app initialization
function initialization(){
    for(let i of document.querySelectorAll("#game-version")){
        i.innerHTML = "ver " + gameVersion;
    }

    /* Temp
    document.querySelector(".main-menu").classList.toggle("hide");
    document.querySelector(".game-multiplayer-lan").classList.remove("hide");
    startGame_LanMultiplayer();
    */

   //startGame_LanMultiplayer()
}


function getInitialBoard(value){
    var board = [];

    for(var x=0; x<boardRows; x++){
        board.push([]);

        for(var y=0; y<boardCols; y++){
            board[x].push(value);
        }
    }

    return;
}


function drawPlayArea(parentNode){
    var canvas = parentNode.querySelector("#game-grid")
    var ctx = canvas.getContext("2d");
    var lineStart = 3;
    var lineEnd = canvasSize - lineStart;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "#ffffff";

    ctx.beginPath();

    for(var x=1; x<boardCols; x++){
        ctx.moveTo(x * areaSize, lineStart);
        ctx.lineTo(x * areaSize, lineEnd);
    }

    for(var y=1; y<boardRows; y++){
        ctx.moveTo(lineStart, y * areaSize);
        ctx.lineTo(lineEnd, y * areaSize);
    }

    ctx.stroke();
}


function screenBack(){
    switch(activeScreen){
        case ".start-menu":
            document.querySelector(activeScreen).classList.toggle("hide");
            document.querySelector(".main-menu").classList.remove("hide");
        break;

        case ".game-multiplayer-lan":
            document.querySelector(activeScreen).classList.toggle("hide");
            document.querySelector(latestScreen).classList.remove("hide");
        break;
    }

    activeScreen = latestScreen;
}


// Called on 'play' button, shows choose gamemode menu
function startGame(){
    latestScreen = ".main-menu";
    activeScreen = ".start-menu";
    document.querySelector(latestScreen).classList.toggle("hide");
    document.querySelector(activeScreen).classList.remove("hide");
    
    //startGame_LanMultiplayer()
}


// Called on 'Local Multiplayer' button, shows game screen
function startGame_LanMultiplayer(){
    latestScreen = ".start-menu";
    activeScreen = ".game-multiplayer-lan";
    document.querySelector(latestScreen).classList.toggle("hide");
    document.querySelector(activeScreen).classList.remove("hide");

    const parentNode = document.querySelector("#game-multiplayer-lan");
    const firstPlayer = new Player();
    const secondPlayer = new Player();
    const playArea = drawPlayArea(parentNode);

}


function validateNicknames(){
 
    
}


initialization();
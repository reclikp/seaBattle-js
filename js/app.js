// Constants and variables
const gameVersion = "0.1";

const boardRows = 10;
const boardCols = 10;
var canvasSize = 500;
var areaSize = canvasSize / boardRows;


// Buttons Definitions
const btnStart = document.querySelector("#button-menu-start-game");
const btnSettings = document.querySelector("#button-menu-settings");
const btnScoreboard = document.querySelector("#button-menu-scoreboard");



// Buttons listeners
btnStart.addEventListener("click", startGame);


// Objects
function Player(parent, selector){
    this.nickname;
    //this.id = selector;
    // this.canvas = this.parent.querySelector(this.id);
    this.board = getInitialBoard("");
    this.enemyBoard = getInitialBoard("");

}


// Basic onload app initialization
function initialization(){
    for(let i of document.querySelectorAll("#game-version")){
        i.innerHTML = "ver " + gameVersion;
    }

    //TEMP
    document.querySelector(".main-menu").classList.toggle("hide");
    document.querySelector(".game-multiplayer-lan").classList.remove("hide");
    startGame_LanMultiplayer();

}

//                       //
// Rest of the functions //
//                       //


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


// Called on 'play' button, shows choose gamemode menu
function startGame(){
    document.querySelector(".main-menu").classList.toggle("hide");
    document.querySelector(".start-menu").classList.remove("hide");

}


// Called on 'Local Multiplayer' button, shows game screen
function startGame_LanMultiplayer(){
    const parentNode = document.querySelector("#game-multiplayer-lan");
    const firstPlayer = new Player();
    const secondPlayer = new Player();

    const playArea = drawPlayArea(parentNode);

    //var firstPlayer_canvas = parent.querySelector("#first-player");
    //var secondPlayerCanvas = parent.querySelector("#second-player");

    
}



initialization();
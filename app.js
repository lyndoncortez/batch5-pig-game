/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var globalScore;
var currentScore;
let dicePNG = document.querySelector("body > div > img");
let playerOneScore = document.querySelector("#score-0");
let playerTwoScore = document.querySelector("#score-1");
let playerOneRoundScore = document.querySelector("#current-0");
let playerTwoRoundScore = document.querySelector("#current-1");

//New Game
document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame() {
    globalScore = 0;
    currentScore = 0;

    dicePNG.src = "dice-1.png";

    playerOneScore.innerHTML = "0";
    playerTwoScore.innerHTML = "0";

    playerOneRoundScore.innerHTML = "0";
    playerTwoRoundScore.innerHTML = "0";
}

//Hold Button
document.querySelector('.btn-hold').addEventListener('click', function() {
    
})

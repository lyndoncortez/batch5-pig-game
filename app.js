/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/**********************************************
*** VARIABLES
**********************************************/


let globalScore = 0;
let roundScore = 0; 
let currentPlayer = 0;

let dicePNG = document.querySelector("body > div > img.dice");

let playerOneScore = document.querySelector("#score-0");
let playerTwoScore = document.querySelector("#score-1");

let playerOneRoundScore = document.querySelector("#current-0");
let playerTwoRoundScore = document.querySelector("#current-1");

let diceObject = document.querySelector(".dice");

let rollBtn = document.querySelector("body > div > button.btn-roll");
let holdBtn = document.querySelector("body > div > button.btn-hold");

let player1Panel = document.querySelector("body > div > div.player-0-panel");
let player2Panel = document.querySelector("body > div > div.player-1-panel");

let modal = document.getElementById("popup1");

let winnerName = document.getElementById("winner player-name");




/**********************************************
*** APP
**********************************************/


//Initialize New Game
document.querySelector('.btn-new').addEventListener('click', newGame);

//Roll Dice Button
rollBtn.addEventListener(
    'click',
    function() {
        let DiceArr = [1, 2, 3, 4, 5, 6];
        let randomDice = DiceArr[Math.floor(Math.random() * DiceArr.length)];

        diceObject.src = "dice-" + randomDice + ".png";
        if (randomDice !== 1) {
            roundScore += randomDice;
            document.querySelector('#current-' + currentPlayer).innerHTML = roundScore;
        } else {
            nextPlayer();
        }
    }

);

//Hold Score Button
holdBtn.addEventListener(
    'click',
    function() {
        globalScore[currentPlayer] += roundScore;
        document.querySelector('#score-' + currentPlayer).innerHTML = globalScore[currentPlayer];
        checkWinner();
    }
);



/**********************************************
*** FUNCTIONS
**********************************************/


function newGame() {
    globalScore = [0, 0];
    roundScore = 0;
    currentPlayer = 0;

    dicePNG.src = "dice-1.png";

    playerOneScore.innerHTML = "0";
    playerTwoScore.innerHTML = "0";

    playerOneRoundScore.innerHTML = "0";
    playerTwoRoundScore.innerHTML = "0";
}

function nextPlayer() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
    }
    else {
        currentPlayer = 0;
    }

    roundScore = 0;
    playerOneRoundScore.innerHTML = "0";
    playerTwoRoundScore.innerHTML = "0";
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}



function checkWinner() {
    let playerName = document.querySelector('.player-name').innerHTML;
    if (globalScore[currentPlayer] >= 100) {
        congratulations(playerName);
    } else {
        nextPlayer();
    }
}

function congratulations(playerName) {
    winnerName.textContent = playerName;
    // show congratulations modal
    modal.classList.add("show");

    //closeicon on modal
    closeModal();
}

// @desciption for user to play Again 
function playAgain() {
    modal.classList.remove("show");
    newGame();
}


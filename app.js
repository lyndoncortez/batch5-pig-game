/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var currentPlayer = 1;
var globalScore1 = 0;
var globalScore2 = 0;
var currentScore1 = 98;
var currentScore2 = 50;

let dicePNG = document.querySelector("body > div > img.dice");

let playerOneScore = document.querySelector("#score-0");

let playerTwoScore = document.querySelector("#score-1");

let playerOneRoundScore = document.querySelector("#current-0");

let playerTwoRoundScore = document.querySelector("#current-1");

let player1Panel = document.querySelector("body > div > div.player-0-panel");

let player2Panel = document.querySelector("body > div > div.player-1-panel");

let modal = document.getElementById("popup1");

let winnerName = document.getElementById("winner player-name");

document.querySelector('.btn-new').addEventListener('click', newGame);

let rollBtn = document.querySelector("body > div > button.btn-roll");
let holdBtn = document.querySelector("body > div > button.btn-hold");

playerOneScore.innerHTML = globalScore1;
playerTwoScore.innerHTML = globalScore2;

playerOneRoundScore.innerHTML = currentScore1;
playerTwoRoundScore.innerHTML = currentScore2;

checkActivePlayer();



function checkActivePlayer() {

    if (currentPlayer === 1) {
        player1Panel.className += " active";
        player2Panel.className = player1Panel.className.replace(/(?:^|\s)active(?!\S)/g, '');
    }
    else {
        player2Panel.className += " active";
        player1Panel.className = player1Panel.className.replace(/(?:^|\s)active(?!\S)/g, '');
    }

}

function newGame() {
    globalScore1 = 0;
    globalScore2 = 0;
    currentScore1 = 0;
    currentScore2 = 0;

    dicePNG.src = "dice-1.png";

    playerOneScore.innerHTML = "0";
    playerTwoScore.innerHTML = "0";

    playerOneRoundScore.innerHTML = "0";
    playerTwoRoundScore.innerHTML = "0";
}

function togglePlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    }
    else {
        currentPlayer = 1;
    }
}

holdBtn.addEventListener(
    'click',
    function (e) {
        togglePlayer();
        checkActivePlayer();
        checkWinner();
    }
);

rollBtn.addEventListener(
    'click',
    function (e) {
        let diceValue = randomDice();
        switch (diceValue) {
            case 1:
                dicePNG.src = "dice-1.png";
                currentScore1 = 0;
                playerOneRoundScore.innerHTML = currentScore1;
                break;
            case 2:
                dicePNG.src = "dice-2.png";
                currentScore1 += diceValue;
                playerOneRoundScore.innerHTML = currentScore1;
                break;
            case 3:
                dicePNG.src = "dice-3.png";
                currentScore1 += diceValue;
                playerOneRoundScore.innerHTML = currentScore1;
                break;
            case 4:
                dicePNG.src = "dice-4.png";
                currentScore1 += diceValue;
                playerOneRoundScore.innerHTML = currentScore1;
                break;
            case 5:
                dicePNG.src = "dice-5.png";
                currentScore1 += diceValue;
                playerOneRoundScore.innerHTML = currentScore1;
                break;
            case 6:
                dicePNG.src = "dice-6.png";
                currentScore1 += diceValue;
                playerOneRoundScore.innerHTML = currentScore1;
                break;

        }
        checkWinner();
    }

);

function randomDice() {
    let DiceArr = [1, 2, 3, 4, 5, 6];

    let randomDice = DiceArr[Math.floor((Math.random() * DiceArr.length))];

    return randomDice;
}

function checkWinner() {
    if (currentScore1 >= 100 || currentScore2 >= 100) {
        if (currentScore1 > currentScore2) {
            congratulations("Player 1");
        }
        else {
            congratulations("Player 2");
        }
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
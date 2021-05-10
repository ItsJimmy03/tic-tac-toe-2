//Global Variables
const playFunc = document.querySelectorAll('.box')
let playerInput = 0;
let turnCount = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let drawScore = 0;

const resetButton = document.querySelector('.resetButton')
resetButton.addEventListener('click', resetGrid)

for (let i = 0; i < playFunc.length; i++) {
    playFunc[i].addEventListener('click', game);
}

//Functions
//--Game Logic
function game(event) {

    if (event.target.innerText != 'O' && event.target.innerText != 'X') {

        turnCount = turnCount + 1
        if (playerInput === 1) {
            event.target.innerText = 'O'
            playerInput = 0;
        } else if (playerInput === 0) {

            event.target.innerText = 'X'
            playerInput = 1;

        }
    } else {

        alert('Invalid move')
    }

    winConditions()

    if (turnCount === 9) {

        drawScore = drawScore + 1;
        alert('Its a a draw')
        document.querySelector('.drawScore').innerText = "Draws: " + drawScore;
        resetGrid();
    }

}

//--Win Conditions
function winConditions() {

    if (document.querySelector('.box-1').innerText === 'X' && document.querySelector('.box-2').innerText === 'X' && document.querySelector('.box-3').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-4').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-6').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-7').innerText === 'X' && document.querySelector('.box-8').innerText === 'X' && document.querySelector('.box-9').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-1').innerText === 'X' && document.querySelector('.box-4').innerText === 'X' && document.querySelector('.box-7').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-2').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-8').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-3').innerText === 'X' && document.querySelector('.box-6').innerText === 'X' && document.querySelector('.box-9').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-1').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-9').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-3').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-7').innerText === 'X') {
        playerOneScore = playerOneScore + 1;
        alert('Player One Wins!')
        resetGrid();
        updatePlayerOneScore()
    } else if (document.querySelector('.box-1').innerText === 'O' && document.querySelector('.box-2').innerText === 'O' && document.querySelector('.box-3').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    } else if (document.querySelector('.box-4').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-6').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    } else if (document.querySelector('.box-7').innerText === 'O' && document.querySelector('.box-8').innerText === 'O' && document.querySelector('.box-9').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    } else if (document.querySelector('.box-1').innerText === 'O' && document.querySelector('.box-4').innerText === 'O' && document.querySelector('.box-7').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    } else if (document.querySelector('.box-3').innerText === 'O' && document.querySelector('.box-6').innerText === 'O' && document.querySelector('.box-9').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    } else if (document.querySelector('.box-1').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-9').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    } else if (document.querySelector('.box-3').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-7').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    } else if (document.querySelector('.box-2').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-8').innerText === 'O') {
        playerTwoScore = playerTwoScore + 1;
        alert('Player Two Wins!')
        resetGrid();
        updatePlayerTwoScore()
    }


}

//--Reset
function resetGrid() {
    console.log("Test")
    document.querySelector('.box-1').innerText = "";
    document.querySelector('.box-2').innerText = "";
    document.querySelector('.box-3').innerText = "";
    document.querySelector('.box-4').innerText = "";
    document.querySelector('.box-4').innerText = "";
    document.querySelector('.box-5').innerText = "";
    document.querySelector('.box-6').innerText = "";
    document.querySelector('.box-7').innerText = "";
    document.querySelector('.box-8').innerText = "";
    document.querySelector('.box-9').innerText = "";
    turnCount = 0;
}

function updatePlayerOneScore() {

    document.querySelector('.playerOneWins').innerText = "Player 1 Wins: " + playerOneScore;

}

function updatePlayerTwoScore() {

    document.querySelector('.playerTwoWins').innerText = "Player 2 Wins: " + playerTwoScore;

}
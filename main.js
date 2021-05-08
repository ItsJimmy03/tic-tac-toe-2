//Global Variables
const playFunc = document.querySelectorAll('.box')
let playerInput = 0;
let turnCount = 0;

const resetButton = document.querySelector('.resetButton')
resetButton.addEventListener('click', resetGrid)

for (let i = 0; i < playFunc.length; i++) {
    playFunc[i].addEventListener('click', game);
}


//Functions

//--Game Logic
function game(event) {

    console.log(event.target);


    if (event.target.innerText != 'O' && event.target.innerText != 'X') {
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

    /* Dont Work ATM
        if (turnCount === 9) {
    
            prompt('its a draw')
            resetGrid();
        }*/

}


//--Win Conditions
function winConditions() {

    if (document.querySelector('.box-1').innerText === 'X' && document.querySelector('.box-2').innerText === 'X' && document.querySelector('.box-3').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-4').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-6').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-7').innerText === 'X' && document.querySelector('.box-8').innerText === 'X' && document.querySelector('.box-9').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-1').innerText === 'X' && document.querySelector('.box-4').innerText === 'X' && document.querySelector('.box-7').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-2').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-8').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-3').innerText === 'X' && document.querySelector('.box-6').innerText === 'X' && document.querySelector('.box-9').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-1').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-9').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-3').innerText === 'X' && document.querySelector('.box-5').innerText === 'X' && document.querySelector('.box-7').innerText === 'X') {

        alert('Player One Wins!')
        resetGrid();
    } else if (document.querySelector('.box-1').innerText === 'O' && document.querySelector('.box-2').innerText === 'O' && document.querySelector('.box-3').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
    } else if (document.querySelector('.box-4').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-6').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
    } else if (document.querySelector('.box-7').innerText === 'O' && document.querySelector('.box-8').innerText === 'O' && document.querySelector('.box-9').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
    } else if (document.querySelector('.box-1').innerText === 'O' && document.querySelector('.box-4').innerText === 'O' && document.querySelector('.box-7').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
    } else if (document.querySelector('.box-3').innerText === 'O' && document.querySelector('.box-6').innerText === 'O' && document.querySelector('.box-9').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
    } else if (document.querySelector('.box-1').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-9').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
    } else if (document.querySelector('.box-3').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-7').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
    } else if (document.querySelector('.box-2').innerText === 'O' && document.querySelector('.box-5').innerText === 'O' && document.querySelector('.box-7').innerText === 'O') {

        alert('Player Two Wins!')
        resetGrid();
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
}



// const player1Input = document.getElementById("player1")
// const player2Input = document.getElementById("player2");
// const player1Btn = player1Input.nextElementSibling
// const player2Btn = player2Input.nextElementSibling

// const state = {
//     player1: '',
//     player2: ''
// }

// console.log(player1Input, player2Input, player1Btn, player2Btn)

// player1Btn.addEventListener("click", () => {
//     state.player1 = player1Input.value;
// })

// player2Btn.addEventListener("click", () => {
//     state.player2 = player2Input.value;
// })

// document.getElementById("startGameBtn").addEventListener("click", () => {

//     if(!state.player1) {
//         state.player1 = "Computer";
//     }

//     if(!state.player2) {
//         state.player2 = "Computer"
//     }

//     console.log(state);
//     document.getElementById("board").style.display = "inherit";
//     document.getElementById("inputContainer").style.display = "none";

//     const player1 = document.createElement("div");
//     const player2 = docuemtn.createElement("div");

//     player1.innerText = `Welcome ${state.player1}`
//     player2.innerText = `Welcome ${state.player2}`

//     document.body.appendChild(player1);
//     document.body.appendChild(player2);
// })
//^^^LET'S ADD THIS LATER^^^///

const playerX = prompt("Player X, you will go first. What is your name?");
const playerO = prompt("Player O, you will go second. What is your name?");

const playerNameX = playerX;
const playerNameO = playerO;

function displayPlayerNames() {
    playerXDisplay = document.getElementById("playerX");
    playerODisplay = document.getElementById("playerO");
    
    console.log(playerXDisplay);
    console.log(playerODisplay);

    playerXDisplay.innerText = "Player X: " + playerNameX;
    playerODisplay.innerText = "Player O: " + playerNameO;
}
displayPlayerNames();

var ticTacToe = {
    init: function () {
        ticTacToe.resetGame = document.getElementById("newGame");
        ticTacToe.symbols = ["X", "O"];
        ticTacToe.squares = Array.from(document.querySelectorAll(".square"))
        ticTacToe.turnIndicator = document.querySelector(".turnIndicator");
        ticTacToe.board = document.querySelector(".board")
        ticTacToe.winningSets = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        ticTacToe.addEventListeners();
        ticTacToe.newGame();
    },
    addEventListeners: function () {
        var tripleT = this;
        this.squares.forEach(function(x) {
            x.addEventListener("click", function() {
                tripleT.play(this);
            })
        })
        newGame.addEventListener("click", function(){
            document.location.reload(true)
        
        })
    },

    newGame: function() {
        this.activePlayer = 0;
        this.gameOver = false;
        this.board.classList.remove("gameOver")
    },
    
    play: function (el) {
        //make sure the square is not filled
        if (!this.gameOver && el.classList.length == 1) {
            //set the contents to your player's symbol
            el.classList.add(this.symbols[this.activePlayer]);
            //check if you won
            if (this.checkWin()) {
                this.turnIndicator.innerText = this.symbols[this.activePlayer] + " Wins!";
                this.endGame();
            }
            //go to the next player's turn
            else {
                this.activePlayer = 1 - this.activePlayer;
                this.turnIndicator.innerText = this.symbols[this.activePlayer] + "'s turn. "
            }
            //check if there is a draw
            if (this.checkDraw()) {
                this.turnIndicator.innerText = "Draw Game!"
                this.endGame();
            }
        }
    },
    
    checkWin: function() {
        tripleT = this;
        return this.winningSets.some(function (x) {
            return x.every(function(i) {
                return Array.from(tripleT.squares[i].classList).indexOf(tripleT.symbols[tripleT.activePlayer]) > -1;
            })
        })
    },
    
    checkDraw: function() {
        const currentStatus = Array.from(document.querySelectorAll(".X, .O"))
        return currentStatus.length === 9
    },

    endGame : function () {
        this.gameOver = true;
        this.board.classList.add("gameOver")
    }
}

window.onload = ticTacToe.init;
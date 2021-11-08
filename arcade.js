
var ticTacToe = {
    init: function () {
        ticTacToe.resetGame = document.getElementById("newGame");
        ticTacToe.symbols = ["X", "O"];
        ticTacToe.squares = Array.from(document.querySelectorAll(".square"))
        ticTacToe.turnIndicator = document.querySelector(".turnIndicator");
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
    },
    
    play: function (el) {
        //make sure the square is not filled
        if (!this.gameOver && el.classList.length == 1) {
            //set the contents to your player's symbol
            el.classList.add(this.symbols[this.activePlayer]);
            //check if you won
            if (this.checkWin()) {
                this.turnIndicator.innerText = this.symbols[this.activePlayer] + " Wins!";
                this.gameOver = true;
            }
            //go to the next player's turn
            else {
                this.activePlayer = 1 - this.activePlayer;
                this.turnIndicator.innerText = this.symbols[this.activePlayer] + "'s turn. "
            }
            //check if there is a draw
            if (this.checkDraw()) {
                this.turnIndicator.innerText = "Draw Game!"
                this.gameOver = true;  
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
    }
}

window.onload = ticTacToe.init;
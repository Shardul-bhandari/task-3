let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(index) {
    if (gameActive && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('status').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.getElementById('status').textContent = "Player X's Turn";
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.textContent = '';
    });
}


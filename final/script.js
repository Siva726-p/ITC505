const boardSize = 5;
let board = [];

function createBoard() {
  const boardDiv = document.getElementById('game-board');
  boardDiv.innerHTML = '';
  board = [];

  for (let row = 0; row < boardSize; row++) {
    const rowArr = [];
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', () => handleClick(row, col));
      boardDiv.appendChild(cell);
      rowArr.push(cell);
    }
    board.push(rowArr);
  }

  randomizeBoard();
}

function toggle(row, col) {
  if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
    board[row][col].classList.toggle('is-off');
  }
}

function handleClick(row, col) {
  toggle(row, col);
  toggle(row - 1, col);
  toggle(row + 1, col);
  toggle(row, col - 1);
  toggle(row, col + 1);
  checkWin();
}

function checkWin() {
  for (let row of board) {
    for (let cell of row) {
      if (!cell.classList.contains('is-off')) return;
    }
  }
  window.alert("You win!");
}

function randomizeBoard() {
  for (let i = 0; i < 15; i++) {
    const row = Math.floor(Math.random() * boardSize);
    const col = Math.floor(Math.random() * boardSize);
    handleClick(row, col);
  }
}

createBoard();


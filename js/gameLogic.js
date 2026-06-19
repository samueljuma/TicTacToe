window.TTT = window.TTT || {};

TTT.checkWinner = function checkWinner(board) {
  for (const line of TTT.WIN_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  if (board.every(cell => cell)) return { winner: 'draw', line: null };
  return null;
};

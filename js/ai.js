window.TTT = window.TTT || {};

function minimax(board, player) {
  const result = TTT.checkWinner(board);
  if (result) {
    if (result.winner === 'X') return { score: -10 };
    if (result.winner === 'O') return { score: 10 };
    return { score: 0 };
  }

  const moves = [];
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const nextBoard = board.slice();
      nextBoard[i] = player;
      const next = minimax(nextBoard, player === 'O' ? 'X' : 'O');
      moves.push({ index: i, score: next.score });
    }
  }

  return player === 'O'
    ? moves.reduce((best, m) => (m.score > best.score ? m : best))
    : moves.reduce((best, m) => (m.score < best.score ? m : best));
}

// Unbeatable CPU move using minimax; CPU always plays 'O'.
TTT.getBestMove = function getBestMove(board) {
  return minimax(board, 'O').index;
};

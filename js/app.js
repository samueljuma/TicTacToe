(function initApp() {
  const statusEl = document.getElementById('status');
  const resetBtn = document.getElementById('resetBtn');
  const resetScoreBtn = document.getElementById('resetScoreBtn');
  const modeBtns = document.querySelectorAll('.mode-btn');

  let board, current, gameOver, mode = 'pvp';

  function init() {
    board = Array(9).fill(null);
    current = 'X';
    gameOver = false;
    TTT.Board.render(board, gameOver);
    updateStatus();
  }

  function updateStatus(message) {
    statusEl.textContent = message || `${current}'s turn`;
  }

  function handleMove(i) {
    if (gameOver || board[i]) return;
    makeMove(i);
    if (!gameOver && mode === 'cpu' && current === 'O') {
      setTimeout(cpuMove, 350);
    }
  }

  function makeMove(i) {
    board[i] = current;
    const result = TTT.checkWinner(board);
    TTT.Board.render(board, gameOver);
    TTT.Board.highlightLastMove(i);

    if (result) {
      gameOver = true;
      if (result.winner === 'draw') {
        TTT.Scoreboard.increment('D');
        updateStatus("It's a draw!");
      } else {
        TTT.Scoreboard.increment(result.winner);
        TTT.Board.highlightWin(result.line);
        updateStatus(`${result.winner} wins!`);
      }
      TTT.Board.disableAll();
      return;
    }

    current = current === 'X' ? 'O' : 'X';
    updateStatus();
  }

  function cpuMove() {
    if (gameOver) return;
    makeMove(TTT.getBestMove(board));
  }

  TTT.Board.onClick(handleMove);

  resetBtn.addEventListener('click', init);
  resetScoreBtn.addEventListener('click', () => TTT.Scoreboard.reset());

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mode = btn.dataset.mode;
      init();
    });
  });

  init();
})();

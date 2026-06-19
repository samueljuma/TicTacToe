window.TTT = window.TTT || {};

TTT.Board = (function createBoardComponent() {
  const boardEl = document.getElementById('board');
  let onCellClick = () => {};

  function render(cells, gameOver) {
    boardEl.innerHTML = '';
    cells.forEach((val, i) => {
      const cell = document.createElement('button');
      cell.className = 'cell' + (val ? ' ' + val.toLowerCase() : '');
      cell.textContent = val || '';
      cell.disabled = !!val || gameOver;
      cell.addEventListener('click', () => onCellClick(i));
      boardEl.appendChild(cell);
    });
  }

  function highlightLastMove(i) {
    const cell = boardEl.children[i];
    if (cell) cell.classList.add('pop');
  }

  function highlightWin(line) {
    line.forEach(i => boardEl.children[i].classList.add('win'));
  }

  function disableAll() {
    [...boardEl.children].forEach(cell => cell.disabled = true);
  }

  function onClick(handler) {
    onCellClick = handler;
  }

  return { render, highlightLastMove, highlightWin, disableAll, onClick };
})();

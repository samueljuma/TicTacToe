window.TTT = window.TTT || {};

TTT.Scoreboard = (function createScoreboardComponent() {
  const scoreXEl = document.getElementById('scoreX');
  const scoreOEl = document.getElementById('scoreO');
  const scoreDEl = document.getElementById('scoreD');
  let scores = { X: 0, O: 0, D: 0 };

  function render() {
    scoreXEl.textContent = scores.X;
    scoreOEl.textContent = scores.O;
    scoreDEl.textContent = scores.D;
  }

  function increment(key) {
    scores[key]++;
    render();
  }

  function reset() {
    scores = { X: 0, O: 0, D: 0 };
    render();
  }

  return { increment, reset };
})();

# Tic Tac Toe

A simple Tic Tac Toe game you can play right in your browser.

**Play it here: https://samueljuma.github.io/TicTacToe/**

## How to play

1. Open the link above.
2. Pick a mode at the top:
   - **Player vs Player** — two people take turns on the same screen.
   - **Player vs Computer** — you play X against an unbeatable computer opponent (O).
3. Click any empty square to place your mark. Players alternate turns, X goes first.
4. Get three of your marks in a row (horizontally, vertically, or diagonally) to win. If all nine squares fill up with no winner, it's a draw.
5. Click **New Round** to clear the board and keep the score, or **Reset Scores** to start over.

## Running it locally

This is a single static HTML file with no build step or dependencies. Just open `index.html` in your browser:

```bash
open index.html
```

## Deployment

The site is automatically deployed to GitHub Pages via the workflow in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). Every push to `main` redeploys the live site.

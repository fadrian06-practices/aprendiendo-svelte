<script>
  import { TURNS } from './constants';
  import { saveGameToStorage, resetGameInStorage } from './logic/storage';
  import { checkWinner, checkEndGame } from './logic/board';
  import confetti from 'canvas-confetti';
  import Square from './components/Square';
  import WinnerModal from './components/WinnerModal';

  let board = (() => {
    const boardFromStorage = window.localStorage.getItem('board');

    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : new Array(9).fill(null);
  })();

  let turn = window.localStorage.getItem('turn') ?? TURNS.X;
  let winner = null;

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }

    board[index] = turn;
    turn = turn === TURNS.X ? TURNS.O : TURNS.X;
    saveGameToStorage(board, turn);

    const newWinner = checkWinner(board);

    if (newWinner) {
      confetti();
      winner = newWinner;
    } else if (checkEndGame(board)) {
      winner = false;
    }
  };

  const resetGame = () => {
    board = new Array(9).fill(null);
    turn = TURNS.X;
    winner = null;
    resetGameInStorage();
  };
</script>

<main class="board">
  <h1>Tic Tac Toe</h1>
  <button on:click={resetGame}> Empezar de nuevo </button>
  <section class="game">
    {#each board as _, index}
      <Square {index} {updateBoard}>
        {#if board[index]}
          {board[index]}
        {/if}
      </Square>
    {/each}
  </section>
  <section class="turn">
    <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
    <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
  </section>
  <WinnerModal {winner} {resetGame} />
</main>

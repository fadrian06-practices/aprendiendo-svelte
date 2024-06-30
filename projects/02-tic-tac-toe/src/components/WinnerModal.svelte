<script>
  import Square from './Square';

  export let winner;
  export let resetGame;

  $: winnerText = winner === false ? 'Empate' : 'Ganó:';
</script>

{#if winner !== null}
  <section class="winner">
    <div class="text">
      <h2>{winnerText}</h2>
      <header class="win">
        {#if winner}
          <Square>{winner}</Square>
        {/if}
      </header>
      <footer>
        <button on:click={resetGame}>Empezar de nuevo</button>
      </footer>
    </div>
  </section>
{/if}

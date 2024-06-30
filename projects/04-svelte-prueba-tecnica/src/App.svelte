<script>
  import { fact } from './store/catFact';
  import { getCatImage } from './store/catImage';

  $: catImage = getCatImage({ fact: $fact });
</script>

<main>
  <h1>Cats App</h1>
  <button on:click={fact.refreshFact}>Get new fact</button>
  <p>{$fact}</p>
  {#if catImage.url}
    <img src={catImage.url} alt={catImage.alt} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }
</style>

<script>
  import ListOfMovies from './ListOfMovies';
  import NoMoviesResult from './NoMoviesResult';

  export let movies;

  $: hasMovies = movies.length > 0;
</script>

{#if hasMovies}
  <ListOfMovies {movies} />
{:else}
  <NoMoviesResult />
{/if}

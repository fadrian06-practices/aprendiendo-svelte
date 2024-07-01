<script>
  export let movies;
</script>

<ul class="movies">
  {#each movies as movie (movie.id)}
    <li class="movie">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img src={movie.image} alt={movie.title} />
    </li>
  {/each}
</ul>

<style>
  .movies {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
  }

  .movie {
    text-align: center;
  }

  .movie h3,
  .movie p {
    margin: 0;
  }

  .movie img {
    border-radius: 8px;
    margin-top: 16px;
  }
</style>

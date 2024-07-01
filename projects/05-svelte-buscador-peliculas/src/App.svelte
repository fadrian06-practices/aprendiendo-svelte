<script context="module">
  let previousSearch = null;
  let isFirstInput = true;
</script>

<script>
  import Movies from './components/Movies';
  import { searchMovies } from './services/movies';
  import debounce from 'just-debounce-it';

  let search = '';
  let sort = false;
  let error = null;
  let loading = false;
  let movies = [];

  async function getMovies({ search }) {
    if (search === previousSearch) {
      return;
    }

    previousSearch = search;
    loading = true;
    error = null;

    try {
      movies = await searchMovies({ search });
    } catch (error) {
      error = error.message;
    }

    loading = false;
  }

  const debouncedGetMovies = debounce((search) => getMovies({ search }), 300);

  function handleSubmit() {
    getMovies({ search });
  }

  function handleChange(event) {
    const newSearch = event.target.value;

    if (newSearch.startsWith(' ')) {
      return;
    }

    search = newSearch;
  }

  $: !error && debouncedGetMovies(search);

  $: if (isFirstInput) {
    isFirstInput = search === '';
  } else if (search === '') {
    error = 'No se puede buscar una película vacía';
  } else if (search.match(/^\d+$/)) {
    error = 'No se puede buscar una película con un número';
  } else if (search.length < 3) {
    error = 'La búsqueda debe tener al menos 3 caracteres';
  } else {
    error = null;
  }

  $: sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;
</script>

<div class="page">
  <header>
    <h1>Buscador de películas</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <input
        style:border="1px solid transparent"
        style:border-color={error ? 'red' : 'transparent'}
        on:input={handleChange}
        value={search}
        placeholder="Avengers, Star Wars, The Matrix..."
      />
      <input type="checkbox" bind:checked={sort} />
      <button>Buscar</button>
    </form>
    {#if error}
      <p style:color="red">{error}</p>
    {/if}
  </header>
  <main>
    {#if loading}
      <p>Cargando...</p>
    {:else}
      <Movies movies={sortedMovies} />
    {/if}
  </main>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
  }

  main {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

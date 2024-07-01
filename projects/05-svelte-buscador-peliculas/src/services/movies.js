const API_KEY = '4287ad07'

export async function searchMovies({ search }) {
  if (!search) {
    return []
  }

  try {
    const input = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    const response = await fetch(input)
    const { Search } = await response.json()

    return Search.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch {
    throw new Error('Error buscando las películas')
  }
}

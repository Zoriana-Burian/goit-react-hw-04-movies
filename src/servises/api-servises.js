//7644a28137d4d22cd52a841780cb2d54
//https://api.themoviedb.org/3/movie/550?api_key=7644a28137d4d22cd52a841780cb2d54
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjQ0YTI4MTM3ZDRkMjJjZDUyYTg0MTc4MGNiMmQ1NCIsInN1YiI6IjYwMmNlMjdiY2VkYWM0MDAzZTUwZWE5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSTFMjfZZkmtPFytIWyAwu7vTaM4K7xySsoTOJV8Q-Y
  
  
const BASE_URL = 'https://api.themoviedb.org/3';

const KEY = '7644a28137d4d22cd52a841780cb2d54';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

 export function fetchMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchMoviesId(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);
}

export function fetchMoviesSearchQuery(searchQuery) {
  return fetchWithErrorHandling( `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
}


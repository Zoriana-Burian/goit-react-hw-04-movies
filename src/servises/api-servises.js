const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '7644a28137d4d22cd52a841780cb2d54';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`,
  );
}

export function fetchMoviesId(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`,
  );
}

export function fetchMoviesSearchQuery(searchQuery) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  );
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
}

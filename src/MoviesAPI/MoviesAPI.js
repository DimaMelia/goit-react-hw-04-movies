const API_KEY = "api_key=3ec095310ac5df45edaaad3dd67523b0";
const BASE_URL = "https://api.themoviedb.org/3";

function fetchWithErrorHandling(
  url = "",
  errorName = "No response from server"
) {
  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(errorName));
  });
}

export function trendingToday() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?${API_KEY}&language=en-US&page=1&include_adult=false`
  );
}

export function searchMovies(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}

export function getMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?${API_KEY}&language=en-US`
  );
}

export function getMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
}

export function getMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?${API_KEY}&language=en-US`,
    "We don't have any reviews for this movie"
  );
}

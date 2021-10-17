import { fetchJson } from 'lib/fetch-json';
import { BASE_URL } from 'const';

export const getMovies = (page, signal) =>
    fetchJson(`${BASE_URL}/movie?page=${page}`, {
        signal,
    });
export const getMovieDetails = (movieId, signal) =>
    fetchJson(`${BASE_URL}/movie/movie/${movieId}`, {
        signal,
    });
export const getMovieComments = (movieId, signal) =>
    fetchJson(`${BASE_URL}/movie/movie/${movieId}/comment`, { signal });

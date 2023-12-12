import axios from 'axios';
let movieStrorage = 1;

if (localStorage.getItem('pagination')) {
  movieStrorage = JSON.parse(localStorage.getItem('pagination'));
} else {
  localStorage.setItem('pagination', JSON.stringify(movieStrorage));
}
export const BASE_URL = 'https://api.themoviedb.org/3/'; 
export const KEY = '00bb2c85647763d13c7f7e27b824373c'; 
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'; 
export const API_URL = `${BASE_URL}trending/movie/day?api_key=${KEY}&page=${movieStrorage}`; 
export const BASE_FIND_WORD_URL = `https://api.themoviedb.org/3/search/movie?api_key=00bb2c85647763d13c7f7e27b824373c`; 
// export const POPULAR_URL = `${BASE_URL}discover/movie/?sort_by=popularity.desc&api_key=${KEY}`;
export const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US`;
// export const MODAL_MOVIE_CARD = ``

const API_GENRE = `${BASE_URL}genre/movie/list?api_key=${KEY}`; 

export async function fetchCardFilm(id) {
  const fetchCard = await fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`);
  const fetchCardJson = await fetchCard.json();

  return fetchCardJson;
}

export class Api {
  constructor() {}

  async fetchCardFilm(id) {
    const fetchCard = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);
    return fetchCard.data;
  }

  async fetchMovies(id) {
    const fetchCard = await axios.get(`${BASE_URL}movie/${id}/videos?api_key=${KEY}`);
    return fetchCard.data;
  }
}






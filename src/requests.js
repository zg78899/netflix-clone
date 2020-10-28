const API_KEY = "b8d66551e308a5be7765c31be1b9ab4d";

const requests = {
  fetchtTrending: `/trending/all/week?api_key=${API_KEY}&language=ko-KR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=ko-KR&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko-KR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=10749`,
  fetchDocumentares: `/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=99`,
};

export default requests;

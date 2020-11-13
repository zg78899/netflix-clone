import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../requests";

function Banner({ title }) {
  // banner-image change;
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovies(res.data.results);
      return res;
    }
    getMovies();
  }, []);
  // console.log("Banner Movies", movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* {title} */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">
            <div className="icons" style={{ width: "20px", height: "20px" }}>
              <svg viewBox="0 0 24 24">
                <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
              </svg>
            </div>
            재생
          </button>
          <button className="banner__button">
            <div className="icons" style={{ width: "20px", height: "20px" }}>
              <svg viewBox="0 0 24 24">
                <path
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            상세 정보
          </button>
        </div>
      </div>
      <div className="banner__row">
        <h2>{title}</h2>
        <div className="banner__posters">
          <div className="banner-wrapper">
            {movies.map((movie) => (
              <img
                key={movie.id}
                src={`${baseURL}${movie.backdrop_path}`}
                alt={movie.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
export default Banner;

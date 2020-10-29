import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Slider from "../NetflixSlider/Slider";
import Item from "../NetflixSlider/Item";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    //
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //  console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // console.log(trailerUrl);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.original_name || movie?.name || "")
        .then((url) => {
          // httsp://www.youtue.com/watch?v=Zny5Vxqk6Mk
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); //Zny5Vxqk6Mk
        })
        .catch((error) => console.log(error));
    }
  };
  // console.log(trailerUrl);

  // console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        <Slider>
          {movies.map((movie) => (
            // <div className="movie__wrapper">
            //   <img
            //     key={movie.id}
            //     onClick={() => handleClick(movie)}
            //     className={`row__poster ${
            //       isLargeRow ? "row__posterLarge" : ""
            //     }`}
            //     src={`${baseURL}${
            //       isLargeRow ? movie.poster_path : movie.backdrop_path
            //     }`}
            //     alt={movie.name}
            //   />
            //   <p>{movie?.title || movie?.name}</p>
            // </div>
            <Item
              key={movie.id}
              movie={movie}
              handle={handleClick}
              isLargeRow={isLargeRow}
              baseURL={baseURL}
            />
          ))}
        </Slider>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;

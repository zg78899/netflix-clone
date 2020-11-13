import React, { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function PlayYoutube({ movie, onClose }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

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
  return (
    <div>
      <YouTube />
      <div className="movie details"></div>
    </div>
  );
}
export default PlayYoutube;

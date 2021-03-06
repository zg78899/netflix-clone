import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";

const Item = ({ movie, handle, baseURL, isLargeRow }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;
      console.log("ref", elementRef);
      return (
        <div
          ref={elementRef}
          className={`movie-wrapper ${cx("item", {
            "item--open": isActive,
          })}`}
        >
          {isLargeRow ? (
            <img className="netflix-original" src="/N.png" alt="Netflix Logo" />
          ) : (
            ""
          )}
          <img
            key={movie.id}
            onClick={() => handle(movie)}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
          <p>{movie?.title || movie?.name}</p>
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;

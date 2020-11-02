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
          className={`movie-wrapper ${cx("item", { "item--open": isActive })}`}
        >
          {isLargeRow ? (
            <img
              className="netflix-original"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="Netflix Logo"
            />
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
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
          <p>{movie?.title || movie?.name}</p>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;

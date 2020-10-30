import React, { useEffect } from "react";
import IconCross from "../icons/iconCross";
import "./Content.scss";

const Content = ({ movie, onClose }) => {
  useEffect(() => {}, [movie]);

  return (
    <div className="content">
      <div className="content__background">
        <div className="content__background__shadow" />
        <div
          className="content__background__image"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          }}
        />
      </div>
      <div className="content__area">
        <div className="content__area__container">
          <div className="content__title">{movie?.title || movie?.name}</div>
          <div className="content__description">{movie.overview}</div>
        </div>
        <button className="content__close" onClick={onClose}>
          <IconCross />
        </button>
      </div>
    </div>
  );
};

export default Content;

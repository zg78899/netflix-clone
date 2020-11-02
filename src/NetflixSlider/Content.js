import React, { useEffect } from "react";
import IconCross from "../icons/iconCross";
import "./Content.scss";

const Content = ({ movie, onClose }) => {
  useEffect(() => {}, [movie]);

  function date(day) {
    const arr = [];
    const s = day.split("-");
    for (let i = 0; i < s.length; i++) {
      arr.push(s[i]);
    }

    return `${arr[0]}년 ${
      arr[1].indexOf(0) === 0 ? arr[1].slice(1) : arr[1]
    }월 ${arr[2].indexOf(0) === 0 ? arr[2].slice(1) : arr[2]}일`;
  }

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
          <div className="content__title">
            {movie?.title || movie?.name} ({movie?.original_title})
          </div>
          <div className="content__release">{date(movie.release_date)}</div>
          <div className="content__average">평점 : {movie?.vote_average}점</div>
          <div className="content__description">
            {movie.overview ? `줄거리 : ${movie.overview}` : ""}
          </div>
        </div>
        <button className="content__close" onClick={onClose}>
          <IconCross />
        </button>
      </div>
    </div>
  );
};

export default Content;

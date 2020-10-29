import React, { useEffect, useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import Content from "./Content";
import SlideButton from "./SlideButton";
import SliderWrapper from "./SliderWrapper";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import "./Slider.scss";

const Slider = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();

  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    // hasNext,
    // hasPrev,
  } = useSliding(width, React.Children.count(children));

  // console.log(hasNext, hasPrev);

  const handleSelect = (movie) => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  console.log("currentSlide", contextValue.currentSlide);
  console.log("containRef", containerRef);
  // console.log(hasNext);
  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div
          className={cx("slider", {
            "slider--open": currentSlide != null,
          })}
        >
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {useSliding(width, React.Children.count(children)).hasPrev && (
          <SlideButton onClick={handlePrev} type="prev" />
        )}
        {useSliding(width, React.Children.count(children)).hasNext && (
          <SlideButton onClick={handleNext} type="next" />
        )}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;

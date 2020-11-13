import React, { useEffect, useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import Content from "./Content";
import SlideButton from "./SlideButton";
import SliderWrapper from "./SliderWrapper";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import "./Slider.scss";
import YouTube from "react-youtube";

const Slider = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  console.log(elementRef);
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(width, React.Children.count(children));

  console.log("useSliding", useSliding(width, React.Children.count(children)));
  console.log("width", width);
  console.log("useSize", useSizeElement());
  console.log("elementRef", elementRef);

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
  // hasPrev = useSliding(width, React.Children.count(children)).hasPrev;
  // hasNext s= useSliding(width, React.Children.count(children)).hasNext;
  console.log("currentSlide", contextValue.currentSlide);
  console.log("containRef", containerRef);
  // console.log(useSliding(width, React.Children.count(children)).hasPrev);
  // console.log(useSliding(width, React.Children.count(children)).hasNext);
  console.log(hasNext);
  console.log(hasPrev);
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
        {hasPrev && <SlideButton onClick={() => handlePrev()} type="prev" />}
        {hasNext && <SlideButton onClick={() => handleNext()} type="next" />}
        {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
        {currentSlide && <YouTube movie={currentSlide} onClose={handleClose} />}
      </SliderWrapper>
    </SliderContext.Provider>
  );
};

export default Slider;

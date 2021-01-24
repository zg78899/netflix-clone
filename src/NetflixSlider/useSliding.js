import { useState, useRef, useEffect } from "react";

// const PADDINGS = 10;

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    console.log("containerRef가 화면에 나타남");
    if (containerRef?.current?.clientWidth) {
      const containerWidth = containerRef.current.clientWidth;
      setContainerWidth(containerWidth);
      setTotalInViewport(Math.floor(containerWidth / elementWidth));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementWidth, containerRef.current, countElements]);

  console.log("container", containerWidth);
  console.log("ele", elementWidth);
  console.log("containerWidth", containerWidth);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  console.log("viewed", viewed);
  console.log("distance", distance);
  console.log("totalInViewed", totalInViewport);
  console.log("hasPrev", hasPrev);
  console.log("hasNext", hasNext);

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;

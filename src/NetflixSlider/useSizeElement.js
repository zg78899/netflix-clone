import { useState, useRef, useEffect } from "react";

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    try {
      if (elementRef) {
        setWidth(elementRef.current.clientWidth);
      }
    } catch (error) {
      console.log(error);
    }
  }, [elementRef.current]);

  return { width, elementRef };
};

export default useSizeElement;

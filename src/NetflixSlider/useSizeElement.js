import { useState, useRef, useEffect } from "react";

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(elementRef.current);
    console.log("setWidth", setWidth);
    console.log("elementRef", elementRef.current);
  }, [elementRef.current]);

  return { width, elementRef };
};

export default useSizeElement;

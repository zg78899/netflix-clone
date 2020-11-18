import { useState, useRef, useEffect, useCallback, useMemo } from "react";

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef && elementRef.current) {
      setWidth(elementRef.current.clientWidth);
    }
  }, [elementRef.current]);

  return { width, elementRef };
};

export default useSizeElement;

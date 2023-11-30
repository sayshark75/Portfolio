import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (ref: React.RefObject<Element>, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (ref.current && !isIntersecting) {
      observer.current = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

      observer.current.observe(ref.current);

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }
  }, [ref, isIntersecting, options]);

  return isIntersecting;
};

export default useIntersectionObserver;

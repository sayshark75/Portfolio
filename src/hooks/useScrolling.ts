import { useEffect, useState } from "react";

const useScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      setIsScrolling(true);

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return { isScrolling };
};

export default useScrolling;

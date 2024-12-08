"use client";
import { useEffect, useState } from "react";

const useCheckScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined;
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

export default useCheckScrolling;

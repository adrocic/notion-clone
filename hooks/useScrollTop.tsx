import { useState, useEffect } from "react";

const useScrollTop = (threshold = 10) => {
  const [didUserScroll, setDidUserScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setDidUserScroll(true);
      } else {
        setDidUserScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return [didUserScroll];
};

export default useScrollTop;
